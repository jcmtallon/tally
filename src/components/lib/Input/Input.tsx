import React from 'react'
import * as S from './Input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardedRef?: React.Ref<HTMLInputElement>
  error?: boolean
}

function ForwardedRefInput(props: InputProps) {
  const { forwardedRef, error, ...otherProps } = props

  return <S.Input showError={!!error} aria-invalid={!!error} ref={forwardedRef} {...otherProps} />
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <ForwardedRefInput {...props} forwardedRef={ref} />
))

export { Input }
export type { InputProps }
