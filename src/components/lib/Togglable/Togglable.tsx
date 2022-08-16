import React, { ReactNode } from 'react'

interface TogglableProps {
  enabled: boolean
  fallback?: ReactNode
  children: ReactNode
}

function Togglable(props: TogglableProps) {
  return <>{props.enabled ? props.children : props.fallback}</>
}

export default Togglable
export { Togglable }
export type { TogglableProps }
