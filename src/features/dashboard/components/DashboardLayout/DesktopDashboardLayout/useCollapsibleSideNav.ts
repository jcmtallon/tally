import { useState, useCallback, useEffect, useRef, RefObject, MouseEvent } from 'react'

const LOCAL_STORAGE_KEY = 'athlos:side_nav_collapsed'

function useCollapsibleSideNav() {
  const [isCollapsed, toggleCollapsedNav] = useState(
    () => window.localStorage.getItem(LOCAL_STORAGE_KEY) !== null,
  )
  const toggle = useCallback(() => {
    toggleCollapsedNav(collapsed => !collapsed)
  }, [toggleCollapsedNav])

  useEffect(() => {
    if (isCollapsed) {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
    } else {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }, [isCollapsed])

  const sideNavRef = useRef<HTMLDivElement>() as RefObject<HTMLDivElement>

  const handleSideNavClick = useCallback(
    (ev: MouseEvent) => {
      if (ev.target === sideNavRef.current) {
        toggle()
      }
    },
    [toggle, sideNavRef],
  )

  return { onClick: handleSideNavClick, ref: sideNavRef, isCollapsed }
}

export { useCollapsibleSideNav }
