import React from 'react'
import { pipeProviders } from 'utils'
import { DashboardLayout } from './components/DashboardLayout'
import { DashboardRouter } from './DashboardRouter'

const DashboardProviders = pipeProviders()
// TODO: AuthProvider
// TODO: React.Suspense
// TODO: Other providers
// TODO: Onboardings
// TODO: Feature Provider

function Dashboard() {
  return (
    <DashboardProviders>
      <DashboardLayout>
        {/* TODO: Other Data providers / Stripe */}
        {/* TODO: Another suspense ? with a page skeleton */}
        <DashboardRouter />
      </DashboardLayout>
    </DashboardProviders>
  )
}

export { Dashboard }
