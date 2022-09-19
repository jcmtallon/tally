import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Clients } from './views/Clients'
import { Invoices } from './views/Invoices'
import { Metric } from './views/Metrics'

function DashboardRouter() {
  return (
    <Routes>
      <Route path="invoices/*" element={<Invoices />} />
      <Route path="clients/*" element={<Clients />} />
      <Route path="metrics/*" element={<Metric />} />
      <Route path="*" element={<Navigate replace to="invoices" />} />
    </Routes>
  )
}

export { DashboardRouter }
