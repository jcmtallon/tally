import type { ReactNode } from 'react'
import ReactDOM from 'react-dom'

const SUPPORTED_PORTALS = ['slide-panel' as const, 'modal' as const, 'alert' as const]

type PortalId = typeof SUPPORTED_PORTALS[number]

interface PortalProps {
  id: PortalId
  container?: Element | null | undefined

  children: ReactNode
}

const portalContainers = Object.fromEntries(
  SUPPORTED_PORTALS.map(portalId => [portalId, document.getElementById(portalId)]),
)

function Portal(props: PortalProps) {
  const container = props.container ?? portalContainers[props.id]

  if (!container) {
    throw new Error(
      props.id ? `missing portal mount point for portal "${props.id}"` : 'no portal container provided',
    )
  }

  return ReactDOM.createPortal(props.children, container)
}

export { Portal }
export type { PortalProps }
