import React, { Ref, forwardRef } from 'react'
import { BaseButtonProps } from './BaseButton'
import { ButtonColor, ButtonSize, ButtonVariant } from './ButtonTypes'
import * as S from './Button.styles'

interface ButtonProps extends Omit<BaseButtonProps, 'ref'> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const { variant = 'solid', color = 'primary', size = 'medium', ...other } = props

  return <S.Button variant={variant} color={color} size={size} {...other} ref={ref} />
}

const forwardRefButton = forwardRef(Button)

export { forwardRefButton as Button }
export type { ButtonProps }
