import React, { ReactNode } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './FormSectionTitle.styles'

interface FormSectionTitleProps {
  className?: string
  title?: ReactNode
}

function FormSectionTitle(props: FormSectionTitleProps) {
  const { title, ...otherProps } = props
  return <S.FormSectionTitle {...otherProps}>{title}</S.FormSectionTitle>
}

const StylableFormSectionTitle = createStylableComponent(S, FormSectionTitle)

export { StylableFormSectionTitle as FormSectionTitle }
export type { FormSectionTitleProps }
