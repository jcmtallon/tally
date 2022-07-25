import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
// import { SlidePanelRoute } from 'components'
import { ClientList } from '../views/ClientList'
// import { AthleteDetails } from '../views/AthleteDetails'

function ClientsRouter() {
  return (
    <Routes>
      <Route path="/" element={<ClientList />}>
        {/* <Route
          path=":athleteId"
          element={
            <SlidePanelRoute parentRouteUrl="/dashboard/athletes/">
              <AthleteDetails clubs={clubs} federations={federations} />
            </SlidePanelRoute>
          }
        /> */}
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export { ClientsRouter }
