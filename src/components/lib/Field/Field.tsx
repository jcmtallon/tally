import { uniqueId } from 'lodash'
import React, { ReactNode, useMemo, useRef, useState } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './Field.styles'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  label?: string
  error?: string
  rounded?: boolean
  required?: boolean | undefined
  // TODO: helper text
}

function Field(props: FieldProps) {
  const [focused, setFocused] = useState(false) // Use focus-within strategy instead.
  const { children, error, rounded = false, id: providedId, required, label, ...otherProps } = props
  const id = useMemo(() => providedId ?? uniqueId('input-'), [providedId])

  const labelRef = useRef<HTMLLabelElement>(null)
  const labelShowsEllipsis = useMemo(() => {
    const labelOffsetWidth = labelRef?.current?.offsetWidth || 0
    const labelScrollWidth = labelRef?.current?.scrollWidth || 0
    return labelOffsetWidth < labelScrollWidth
  }, [labelRef])

  const hasError = Boolean(error)
  const errorId = `error-${id}`
  const inputId = `input-${id}`

  const renderErrorText = () => {
    if (typeof error === 'string') {
      return error
    }

    return null
  }

  const renderInput = () => {
    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
      const child = React.Children.only(children)
      const enhancedProps = {
        id: inputId,
        name: id,
        hasError: hasError ? true : undefined,
        hasErrors: hasError ? true : undefined,
        rounded: rounded ? true : undefined,
        error,
        'aria-required': required ? true : undefined,
        'aria-invalid': hasError ? true : undefined,
        'aria-errormessage': hasError ? errorId : undefined,
        ...child.props,
        onBlur: (e: unknown) => {
          setFocused(false)
          child.props?.onBlur?.(e)
        },
        onFocus: (e: unknown) => {
          setFocused(true)
          child.props?.onFocus?.(e)
        },
      }

      return React.cloneElement(child, enhancedProps)
    }

    return children
  }

  const renderLabel = () => (
    <S.LabelWrapper
      title={labelShowsEllipsis ? label : undefined}
      // When using title, the 'group' role is assigned automatically to the element.
      // To avoid creating confusion when using a screen reader, we explicitly set the role as none.
      role="none"
      focused={focused}
      withOffset={rounded}>
      <S.Label ref={labelRef} htmlFor={inputId}>
        {label}
      </S.Label>
      {required === false ? <S.OptionalIndicator aria-hidden>(opcional)</S.OptionalIndicator> : null}
    </S.LabelWrapper>
  )

  return (
    <S.Wrapper id={id} {...otherProps}>
      {renderLabel()}
      <S.Content>{renderInput()}</S.Content>
      {error && (
        <S.Error withOffset={rounded} id={errorId}>
          {renderErrorText()}
        </S.Error>
      )}
    </S.Wrapper>
  )
}

const StylableField = createStylableComponent(S, Field)

export { StylableField as Field }
export type { FieldProps }
