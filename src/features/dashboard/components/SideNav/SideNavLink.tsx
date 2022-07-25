import React, { Ref, ReactNode, DetailedHTMLProps, AnchorHTMLAttributes, ComponentType } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './SideNavLink.styles'

type HTMLAnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

interface SideNavLinkProps extends HTMLAnchorProps {
  as?: ComponentType<HTMLAnchorProps>
  icon: ReactNode
  label: ReactNode
  desc?: ReactNode
  tag?: string
}

function SideNavLink(props: SideNavLinkProps, ref: Ref<HTMLAnchorElement>) {
  const { as: Component = S.NavLink, icon, label, tag, ...otherProps } = props

  return (
    <S.NavLink as={Component} {...otherProps} ref={ref}>
      <S.Icon>{icon}</S.Icon>
      <S.Label>
        {label}
        {tag ? <S.Tag /> : <></>}
      </S.Label>
    </S.NavLink>
  )
}

const forwardRefSideNavLink = React.forwardRef(SideNavLink)
const StylableSideNavLink = createStylableComponent(S, forwardRefSideNavLink)

export { StylableSideNavLink as SideNavLink }
export type { SideNavLinkProps }
