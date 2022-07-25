import React, { ReactNode } from 'react'
import { ErrorBoundary } from '../ErrorBoundary'

interface AppErrorBoundaryProps {
  children?: ReactNode
}

// TODO: Create GenericError component for error prop

function AppErrorBoundary(props: AppErrorBoundaryProps) {
  return <ErrorBoundary error={<div>ERROR!!</div>} {...props} />
}

export { AppErrorBoundary }
