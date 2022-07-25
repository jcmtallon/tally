import React, { ReactNode } from 'react'
import { DesktopDashboardLayout } from './DesktopDashboardLayout'

interface DashboardLayoutProps {
  sideNav?: ReactNode
  children: ReactNode
}

function DashboardLayout(props: DashboardLayoutProps) {
  // TODO: Use Responsive Layout in layout
  const layout = <DesktopDashboardLayout sideNav={props.sideNav}>{props.children}</DesktopDashboardLayout>

  return layout
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
