import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './MetricsDashboard.styles'

interface MetricsDashboardProps extends HTMLAttributes<HTMLDivElement> {}

function MetricsDashboard(props: MetricsDashboardProps) {
  const { ...otherProps } = props

  return (
    <DashboardLayout>
      <div {...otherProps}>This is the Metrics dashboard. Work in progress</div>
    </DashboardLayout>
  )
}

const StylableMetricsDashboard = createStylableComponent(S, MetricsDashboard)

export { StylableMetricsDashboard as MetricsDashboard }
export type { MetricsDashboardProps }
