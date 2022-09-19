import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MetricsDashboard } from '../views/MetricsDashboard'

function MetricsRouter() {
  return (
    <Routes>
      <Route path="/" element={<MetricsDashboard />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { MetricsRouter }
