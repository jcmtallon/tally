import React from 'react'
import { createDashboardSection } from 'features/dashboard'
import { IconPeople, IconGear, IconBars, IconInvoice } from 'components'

const dashboardSections = [
  createDashboardSection('invoices', {
    label: 'Invoices',
    desc: 'Some desc',
    icon: <IconInvoice />,
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
    icon: <IconPeople />,
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
    icon: <IconBars />,
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
    icon: <IconGear />,
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
