import React from 'react'
import * as S from './Input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardedRef?: React.Ref<HTMLInputElement>
}

function ForwardedRefInput(props: InputProps) {
  const { forwardedRef, ...otherProps } = props

  return <S.Input ref={forwardedRef} {...otherProps} />
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <ForwardedRefInput {...props} forwardedRef={ref} />
))

export { Input }
export type { InputProps }
