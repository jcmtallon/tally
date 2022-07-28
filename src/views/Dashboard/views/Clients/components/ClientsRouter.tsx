import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { SlidePanelRoute } from 'components'
import { ClientList } from '../views/ClientList'
import { ClientDetails } from '../views/ClientDetails'

function ClientsRouter() {
  return (
    <Routes>
      <Route path="/" element={<ClientList />}>
        <Route
          path=":clientId"
          element={
            <SlidePanelRoute parentRouteUrl="/dashboard/clients/">
              <ClientDetails />
            </SlidePanelRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { ClientsRouter }
