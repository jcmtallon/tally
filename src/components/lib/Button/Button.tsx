import React, { Ref, forwardRef, ReactNode } from 'react'
import { BaseButtonProps } from './BaseButton'
import { ButtonColor, ButtonSize, ButtonVariant } from './ButtonTypes'
import * as S from './Button.styles'

interface ButtonProps extends Omit<BaseButtonProps, 'ref'> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  startIcon?: ReactNode
  loading?: boolean
}

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const {
    variant = 'solid',
    color = 'primary',
    size = 'regular',
    children,
    loading = false,
    ...other
  } = props

  const spinner = loading && (
    <S.SpinnerWrapper>
      <S.Spinner />
    </S.SpinnerWrapper>
  )

  const startIcon = props.startIcon && (
    <S.StartIconWrapper iconOnly={!children} size={size} spinnerVisible={loading}>
      {props.startIcon}
    </S.StartIconWrapper>
  )

  const label = <S.Label spinnerVisible={loading}>{children}</S.Label>

  return (
    <S.Button variant={variant} color={color} size={size} {...other} ref={ref}>
      {spinner}
      {startIcon}
      {label}
    </S.Button>
  )
}

const forwardRefButton = forwardRef(Button)

export { forwardRefButton as Button }
export type { ButtonProps }
