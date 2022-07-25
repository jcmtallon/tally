import React, { HTMLProps, ReactElement, ReactNode } from 'react'
import { DashboardSection, DASHBOARD_SECTION_DISPLAY_STATUS } from './Section'

interface NavLinkProps {
  id: string
  to: string
  label: ReactNode
  icon: ReactNode
  desc: ReactNode
  hidden: boolean
  tag?: string
}

interface NavProps<Id extends string> extends HTMLProps<HTMLElement> {
  url?: string
  sections?: DashboardSection<Id>[]
  displayType?: 'desktop' | 'mobile'
  renderNavLink?: (props: NavLinkProps) => ReactElement
}

function Nav<Id extends string>(props: NavProps<Id>) {
  const {
    url = '/',
    sections = [],
    displayType = 'desktop',
    renderNavLink = () => <></>,
    ...otherProps
  } = props

  const renderSectionLink = (sectionProps: DashboardSection<Id>) => {
    const status = sectionProps[`${displayType}Status`]

    const tags = {
      [DASHBOARD_SECTION_DISPLAY_STATUS.ENABLED]: undefined,
      [DASHBOARD_SECTION_DISPLAY_STATUS.DISABLED]: undefined,
      [DASHBOARD_SECTION_DISPLAY_STATUS.BETA]: 'BETA',
      [DASHBOARD_SECTION_DISPLAY_STATUS.WIP]: 'WIP',
    }

    // TODO: wrap with Criteria
    return renderNavLink({
      id: sectionProps.id,
      to: `${url}/${sectionProps.to}`,
      label: sectionProps.label,
      icon: sectionProps.icon,
      desc: sectionProps.desc,
      hidden: status === DASHBOARD_SECTION_DISPLAY_STATUS.DISABLED,
      tag: tags[status],
    })
  }

  return (
    <nav {...otherProps}>
      {sections.map(renderSectionLink)}
      {otherProps.children}
    </nav>
  )
}

export { Nav }
export type { NavProps, NavLinkProps }
