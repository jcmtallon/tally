import React, { HTMLAttributes, ReactNode } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './IconBox.styles'

interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  children?: never
}

function IconBox(props: IconBoxProps) {
  const { icon, ...otherProps } = props
  return <S.Wrapper {...otherProps}>{icon}</S.Wrapper>
}

const StylableIconBox = createStylableComponent(S, IconBox)

export { StylableIconBox as IconBox }
export type { IconBoxProps }
