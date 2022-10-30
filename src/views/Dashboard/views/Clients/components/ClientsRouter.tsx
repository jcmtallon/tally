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

  const parentRoute = '/dashboard/clients'
  const parentRouteWithSearchParams = `${parentRoute}${search}`

  const [clients, setClients] = useState<Client[] | undefined>(undefined)
  const [fetching, setFetching] = useState(true)

  const fetchClientData = useCallback(async () => {
    const response = await clientsApi.list()
    setClients(response)
    setFetching(false)
  }, [])

  useEffect(() => {
    fetchClientData()
  }, [fetchClientData])

  const onClientCreatedHandle = useCallback(() => {
    navigate(parentRoute)
    fetchClientData()
  }, [navigate, fetchClientData, parentRoute])

  const onClientUpdateHandle = useCallback(() => {
    navigate(parentRouteWithSearchParams)
    fetchClientData()
  }, [navigate, fetchClientData, parentRouteWithSearchParams])

  const onClientDelete = useCallback(() => {
    fetchClientData()
  }, [fetchClientData])

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <ClientList
              clients={clients}
              fetching={fetching}
              onCreateClientButtonClicked={() => navigate(`/dashboard/clients/create${search}`)}
              onShowClientDetailsClicked={clientId => navigate(`/dashboard/clients/${clientId}${search}`)}
              onClientDelete={onClientDelete}
            />
            <Outlet />
          </>
        }>
        <Route
          path="create"
          element={
            <SlidePanelRoute parentRouteUrl={parentRouteWithSearchParams}>
              <ClientCreation onClientCreated={onClientCreatedHandle} />
            </SlidePanelRoute>
          }
        />
        <Route
          path=":clientId"
          element={
            <SlidePanelRoute parentRouteUrl={parentRouteWithSearchParams}>
              <ClientDetails onClientUpdated={onClientUpdateHandle} />
            </SlidePanelRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { ClientsRouter }
