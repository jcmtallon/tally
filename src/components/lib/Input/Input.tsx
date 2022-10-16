import React, { ReactNode } from 'react'
import * as S from './Input.styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  forwardedRef?: React.Ref<HTMLInputElement>
  rounded?: boolean
  error?: boolean
  endAdornment?: ReactNode
}

function ForwardedRefInput(props: InputProps) {
  const { forwardedRef, error = undefined, rounded = false, endAdornment, ...otherProps } = props

  return (
    <S.Wrapper rounded={rounded} showError={!!error}>
      <S.Input aria-invalid={!!error} ref={forwardedRef} {...otherProps} />
      {endAdornment && <S.EndAdornmentWrapper>{endAdornment}</S.EndAdornmentWrapper>}
    </S.Wrapper>
  )
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <ForwardedRefInput {...props} forwardedRef={ref} />
))

export { Input }
export type { InputProps }
