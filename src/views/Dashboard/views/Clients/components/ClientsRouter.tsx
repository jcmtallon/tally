import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
// import { SlidePanelRoute } from 'components'
// import { Club, Federation, getClubs, getFederations } from 'olympos'
// import { AthleteList } from '../views/AthleteList'
// import { AthleteDetails } from '../views/AthleteDetails'

function ClientsRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Clients</div>}>
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
