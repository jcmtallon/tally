import React from 'react'
import * as S from './Checkbox.styles'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Checkbox({ type = 'checkbox', ...otherProps }: CheckboxProps) {
  return <S.Input type={type} {...otherProps} />
}

export { Checkbox }
export type { CheckboxProps }
