import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './SideNavSectionHeader.styles'

interface SideNavSectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

function SideNavSectionHeader(props: SideNavSectionHeaderProps) {
  const { title, ...otherProps } = props
  return <S.Wrapper {...otherProps}>{title}</S.Wrapper>
}

const StylableSideNavSectionHeader = createStylableComponent(S, SideNavSectionHeader)

export { StylableSideNavSectionHeader as SideNavSectionHeader }
export type { SideNavSectionHeaderProps }
