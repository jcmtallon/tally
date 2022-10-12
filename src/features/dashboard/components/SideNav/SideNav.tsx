import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavProps } from '../Nav'
import { SideNavLink } from './SideNavLink'
import * as S from './SideNav.styles'

function SideNav<Id extends string>(props: NavProps<Id>) {
  const renderNavLink: NavProps<Id>['renderNavLink'] = props => (
    <SideNavLink
      {...props}
      key={props.id}
      icon={props.icon}
      desc={props.desc}
      href={props.to}
      label={props.label}
      {...({ forwardedAs: NavLink } as any)}
    />
  )

  return (
    <S.Wrapper>
      <S.SectionTitle title="DASHBOARD" />
      <Nav {...props} renderNavLink={renderNavLink} />
    </S.Wrapper>
  )
}

export { SideNav }
