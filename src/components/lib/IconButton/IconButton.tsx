import React, { Ref, forwardRef } from 'react'
import { ButtonProps } from '../Button/Button'
import * as S from './IconButton.styles'

type IconButtonProps = Omit<ButtonProps, 'startIcon'>

function IconButton(props: IconButtonProps, ref: Ref<HTMLButtonElement>) {
  const { color = 'highlight', size = 'regular', children, ...other } = props

  return (
    <S.Button color={color} size={size} {...other} ref={ref}>
      {children}
    </S.Button>
  )
}

const forwardRefIconButton = forwardRef(IconButton)

export { forwardRefIconButton as IconButton }
export type { IconButtonProps }
