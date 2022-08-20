import React from 'react'
import * as S from './Input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardedRef?: React.Ref<HTMLInputElement>
  rounded?: boolean
  error?: boolean
}

function ForwardedRefInput(props: InputProps) {
  const { forwardedRef, error = undefined, rounded = false, ...otherProps } = props

  return (
    <S.Input
      showError={!!error}
      rounded={rounded}
      aria-invalid={!!error}
      ref={forwardedRef}
      {...otherProps}
    />
  )
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <ForwardedRefInput {...props} forwardedRef={ref} />
))

export { Input }
export type { InputProps }
