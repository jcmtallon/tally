import { SideNav, DashboardLayoutSlotsProvider } from 'features/dashboard'
import React, { PropsWithChildren } from 'react'
import { DashboardControls } from './DashboardControls'
import { dashboardSections } from '../DashboardSections'

function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  // TODO: Add bottomNav / other sections

  const controls = <DashboardControls />

  const sideNav = <SideNav url="/dashboard" sections={dashboardSections} displayType="desktop" />

  return (
    <DashboardLayoutSlotsProvider sideNav={sideNav} controls={controls}>
      {children}
    </DashboardLayoutSlotsProvider>
  )
}

const MemoizedDashboardLayout = React.memo(DashboardLayout)

export { MemoizedDashboardLayout as DashboardLayout }
