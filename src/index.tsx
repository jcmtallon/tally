import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

// TODO: polyfill/ie11
// TODO: polyfill/stable
// TODO: configs: like firebase, cypress, google maps, datadog, intercom, logRocket, mixpanel, stripe, google analytics, etc.
// TODO: tracking

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
