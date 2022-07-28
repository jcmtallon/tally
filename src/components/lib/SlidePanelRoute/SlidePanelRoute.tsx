import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SlidePanel } from '../SlidePanel'
import { SlidePanelControlsProvider, SlidePanelControls } from './SlidePanelContext'

type SlidePanelRouteProps = {
  children?: ReactNode
  parentRouteUrl: string
}

function SlidePanelRoute(props: SlidePanelRouteProps) {
  const { children, parentRouteUrl } = props

  const [show, toggleShow] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const onClosed = useCallback(() => {
    navigate(parentRouteUrl, { state: location.state || undefined })
  }, [navigate, parentRouteUrl, location.state])

  const ctx = useMemo<SlidePanelControls>(
    () => ({
      open: () => {
        toggleShow(true)
      },
      close: () => {
        toggleShow(false)
      },
      toggleOpen: open => {
        toggleShow(current => (open === undefined ? !current : open))
      },
    }),
    [toggleShow],
  )

  // Show on mount, hide on unmount.
  useEffect(() => {
    toggleShow(true)

    return () => {
      toggleShow(false)
    }
  }, [])

  return (
    <SlidePanelControlsProvider value={ctx}>
      <SlidePanel onCloseRequest={ctx.close} show={show} onExited={onClosed}>
        {children}
      </SlidePanel>
    </SlidePanelControlsProvider>
  )
}

export { SlidePanelRoute }
export type { SlidePanelRouteProps }
