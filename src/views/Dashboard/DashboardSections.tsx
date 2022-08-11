import React from 'react'
import { createDashboardSection } from 'features/dashboard'
import { IconRunner } from 'components'

const dashboardSections = [
  createDashboardSection('invoices', {
    label: 'Invoices',
    desc: 'Some desc',
    icon: <IconRunner />,
    to: 'invoices',
    mobileStatus: 'ENABLED',
    desktopStatus: 'ENABLED',
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
  createDashboardSection('clients', {
    label: 'Clients',
    desc: 'Some desc',
    icon: <IconRunner />,
    to: 'clients',
    mobileStatus: 'ENABLED',
    desktopStatus: 'ENABLED',
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
  createDashboardSection('metrics', {
    label: 'Metrics',
    desc: 'Some desc',
    icon: <IconRunner />,
    to: 'metrics',
    mobileStatus: 'ENABLED',
    desktopStatus: 'ENABLED',
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
  createDashboardSection('settings', {
    label: 'Settings',
    desc: 'Some desc',
    icon: <IconRunner />,
    to: 'settings',
    mobileStatus: 'ENABLED',
    desktopStatus: 'ENABLED',
    requiresPermission: '',
    requiresFeatureFlag: '',
    requiresSubscriptionFeature: '',
  }),
]

// TODO: change to TallyDashboardSectionId
type DashboardSectionId = typeof dashboardSections[number]['id']

export { dashboardSections }
export type { DashboardSectionId }
