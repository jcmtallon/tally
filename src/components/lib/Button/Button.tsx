import React, { Ref, forwardRef } from 'react'
import { BaseButtonProps } from './BaseButton'
import * as S from './Button.styles'

interface ButtonProps extends Omit<BaseButtonProps, 'ref'> {}

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  return <S.Button {...props} ref={ref} />
}

const forwardRefButton = forwardRef(Button)

export { forwardRefButton as Button }
export type { ButtonProps }
