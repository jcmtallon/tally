import { uniqueId } from 'lodash'
import React, { ReactElement, ReactNode, useMemo } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './Field.styles'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  label?: string | ReactElement
  error?: string
  // TODO: required
  // TODO: helper text
}

function Field(props: FieldProps) {
  const { children, error, id: providedId, label, ...otherProps } = props
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
        error,
        'aria-invalid': hasError ? true : undefined,
        'aria-errormessage': hasError ? errorId : undefined,
        ...child.props,
      }

      return React.cloneElement(child, enhancedProps)
    }

    return children
  }

  const renderLabel = () => (
    <S.LabelWrapper>
      <S.Label htmlFor={inputId}>{label}</S.Label>
    </S.LabelWrapper>
  )

  return (
    <S.Wrapper id={id} {...otherProps}>
      {renderLabel()}
      <S.Content>{renderInput()}</S.Content>
      {error && <S.Error id={errorId}>{renderErrorText()}</S.Error>}
    </S.Wrapper>
  )
}

const StylableField = createStylableComponent(S, Field)

export { StylableField as Field }
export type { FieldProps }
