import React from 'react'
import { Route, Routes, Navigate, useNavigate, Outlet, useLocation } from 'react-router-dom'
import { SlidePanelRoute } from 'components'
import { ClientList } from '../views/ClientList'
import { ClientDetails } from '../views/ClientDetails'
import { ClientCreation } from '../views/ClientCreation'

function ClientsRouter() {
  const navigate = useNavigate()
  const { search } = useLocation()

  // TODO: show row selected

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ClientList
              onCreateClientButtonClicked={() => navigate(`/dashboard/clients/create${search}`)}
              onShowClientDetailsClicked={clientId => navigate(`/dashboard/clients/${clientId}`)}
            />
            <Outlet />
          </>
        }>
        <Route
          path="create"
          element={
            <SlidePanelRoute parentRouteUrl={`/dashboard/clients${search}`}>
              <ClientCreation onClientCreated={() => navigate(`/dashboard/clients`)} />
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
