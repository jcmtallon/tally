import { uniqueId } from 'lodash'
import React, { ReactElement, ReactNode, useMemo, useState } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './Field.styles'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  label?: string | ReactElement
  error?: string
  rounded?: boolean
  required?: boolean | undefined
  // TODO: helper text
}

function Field(props: FieldProps) {
  const [focused, setFocused] = useState(false)
  const { children, error, rounded = false, id: providedId, required, label, ...otherProps } = props
  const id = useMemo(() => providedId ?? uniqueId('input-'), [providedId])

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
    <S.LabelWrapper focused={focused} withOffset={rounded}>
      <S.Label htmlFor={inputId}>{label}</S.Label>
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
