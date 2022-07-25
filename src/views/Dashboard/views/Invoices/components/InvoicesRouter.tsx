import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { InvoiceList } from '../views/InvoiceList'

function InvoicesRouter() {
  return (
    <Routes>
      <Route path="/" element={<InvoiceList />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { InvoicesRouter }
