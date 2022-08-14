import { uniqueId } from 'lodash'
import React, { ReactElement, ReactNode, useMemo } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './Field.styles'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  label?: string | ReactElement
}

function Field(props: FieldProps) {
  const { children, id: providedId, label, ...otherProps } = props
  const id = useMemo(() => providedId ?? uniqueId('input-'), [providedId])
  const inputId = `input-${id}`

  const renderInput = () => {
    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
      const child = React.Children.only(children)
      const enhancedProps = {
        id: inputId,
        name: id,
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
    </S.Wrapper>
  )
}

const StylableField = createStylableComponent(S, Field)

export { StylableField as Field }
export type { FieldProps }
