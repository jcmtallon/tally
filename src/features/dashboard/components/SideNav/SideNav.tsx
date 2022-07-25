import React from 'react'
import { Nav, NavProps } from '../Nav'
import { SideNavLink } from './SideNavLink'

function SideNav<Id extends string>(props: NavProps<Id>) {
  const renderNavLink: NavProps<Id>['renderNavLink'] = props => (
    <SideNavLink key={props.id} icon={props.icon} desc={props.desc} href={props.to} label={props.label} />
  )

  return <Nav {...props} renderNavLink={renderNavLink} />
}

export { SideNav }
