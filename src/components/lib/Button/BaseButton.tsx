import React, { DetailedHTMLProps, ButtonHTMLAttributes, Ref, forwardRef } from 'react'
import * as S from './BaseButton.styles'

type BaseButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function BaseButton(props: BaseButtonProps, ref: Ref<HTMLButtonElement>) {
  const { children, ...otherProps } = props

  return (
    <S.Button type="button" {...otherProps} ref={ref}>
      {children}
    </S.Button>
  )
}

const forwardRefBaseButton = forwardRef(BaseButton)

export { forwardRefBaseButton as BaseButton }
export type { BaseButtonProps }
