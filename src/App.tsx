import { AppErrorBoundary } from 'components'
import React from 'react'
import { ToastContainer } from 'features/toasts'
import { GlobalStyles, ThemeProvider } from './theme'
import { Routes } from './views/Routes'
import 'react-toastify/dist/ReactToastify.css'

// TODO: use `AppProvider` with `pipeProviders` strategy?
// - TODO: Redux
// - TODO: ConnectedRouter
// - TODO: i18N
// - TODO: Suspense + ActivityIndicator fallback
// - TODO: React.Suspense
// - TODO: GlobalStyles
// - TODO: App ErrorBoundary
// - TODO: TrackingProvider
// - TODO: RemoteConfigProvider

function App() {
  return (
    <>
      <ThemeProvider colorMode="light">
        <GlobalStyles />
        <AppErrorBoundary>
          <React.Suspense fallback={<div>Initial Suspense</div>}>
            <Routes />
            <ToastContainer />
          </React.Suspense>
        </AppErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default App
