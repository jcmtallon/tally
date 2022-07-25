import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

function InvoicesRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Invoices</div>} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { InvoicesRouter }
