import { ReactNode } from 'react'
import { CriteriaProps } from './Criteria'

const DASHBOARD_SECTION_DISPLAY_STATUS = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  BETA: 'BETA',
  WIP: 'WIP',
} as const

type DashboardSectionDisplayStatus =
  typeof DASHBOARD_SECTION_DISPLAY_STATUS[keyof typeof DASHBOARD_SECTION_DISPLAY_STATUS]

interface DashboardSectionDisplayConfig {
  label: ReactNode
  icon: ReactNode
  desc: ReactNode
  mobileStatus: DashboardSectionDisplayStatus
  desktopStatus: DashboardSectionDisplayStatus
}

type DashboardSection<Id extends string> = CriteriaProps & {
  id: Id
  to: string
  label: ReactNode
  icon: ReactNode
  desc: ReactNode
  mobileStatus: DashboardSectionDisplayStatus
  desktopStatus: DashboardSectionDisplayStatus
}

function createDashboardSection<Id extends string>(
  id: Id,
  config: CriteriaProps & DashboardSectionDisplayConfig & { to: string },
): DashboardSection<Id> {
  return {
    id,
    ...config,
  }
}

export { createDashboardSection, DASHBOARD_SECTION_DISPLAY_STATUS }
export type { DashboardSection, DashboardSectionDisplayStatus, DashboardSectionDisplayConfig }
