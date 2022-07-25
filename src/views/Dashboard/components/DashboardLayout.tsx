import { SideNav, DashboardLayoutSlotsProvider } from 'features/dashboard'
import React, { PropsWithChildren } from 'react'
import { dashboardSections } from '../DashboardSections'

function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  // TODO: Add Controls / bottomNav / other sections

  const sideNav = <SideNav url="/dashboard" sections={dashboardSections} displayType="desktop" />

  return <DashboardLayoutSlotsProvider sideNav={sideNav}>{children}</DashboardLayoutSlotsProvider>
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
