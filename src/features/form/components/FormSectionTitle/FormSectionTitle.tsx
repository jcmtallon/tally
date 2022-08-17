import React, { ReactNode } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './FormSectionTitle.styles'

interface FormSectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  text?: ReactNode
}

function FormSectionTitle(props: FormSectionTitleProps) {
  const { text, ...otherProps } = props
  return <S.FormSectionTitle {...otherProps}>{text}</S.FormSectionTitle>
}

const StylableFormSectionTitle = createStylableComponent(S, FormSectionTitle)

export { StylableFormSectionTitle as FormSectionTitle }
export type { FormSectionTitleProps }
