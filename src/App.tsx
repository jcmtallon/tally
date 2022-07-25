import { AppErrorBoundary } from 'components'
import React from 'react'
import { GlobalStyles, ThemeProvider } from './theme'
import { Routes } from './views/Routes'

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
// - TODO: ToastProvider

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <AppErrorBoundary>
          <React.Suspense fallback={<div>Initial Suspense</div>}>
            <Routes />
          </React.Suspense>
        </AppErrorBoundary>
      </ThemeProvider>
    </>
  )
}

export default App
