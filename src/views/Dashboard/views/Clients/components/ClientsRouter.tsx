import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { SlidePanelRoute } from 'components'
import { ClientList } from '../views/ClientList'
import { ClientDetails } from '../views/ClientDetails'
import { ClientCreate } from '../views/ClientCreate'

function ClientsRouter() {
  const navigate = useNavigate()

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ClientList
            onCreateClientButtonClicked={() => navigate(`/dashboard/clients/create`)}
            onShowClientDetailsClicked={clientId => navigate(`/dashboard/clients/${clientId}`)}
          />
        }>
        <Route
          path=":create"
          element={
            <SlidePanelRoute parentRouteUrl="/dashboard/clients/">
              <ClientCreate />
            </SlidePanelRoute>
          }
        />
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
