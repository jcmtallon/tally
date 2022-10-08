import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes, Navigate, useNavigate, Outlet, useLocation } from 'react-router-dom'
import { SlidePanelRoute } from 'components'
import { Client, clients as clientsApi } from 'services'
import { ClientList } from '../views/ClientList'
import { ClientDetails } from '../views/ClientDetails'
import { ClientCreation } from '../views/ClientCreation'

function ClientsRouter() {
  const navigate = useNavigate()
  const { search } = useLocation()

  const [clients, setClients] = useState<Client[] | undefined>(undefined)

  const fetchClientData = useCallback(async () => {
    const response = await clientsApi.list()
    setClients(response)
  }, [])

  useEffect(() => {
    fetchClientData()
  }, [fetchClientData])

  const onClientCreatedHandle = useCallback(() => {
    navigate(`/dashboard/clients`)
    fetchClientData()
  }, [navigate, fetchClientData])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ClientList
              clients={clients}
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
              <ClientCreation onClientCreated={onClientCreatedHandle} />
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
