import React, { createContext, ReactNode, useContext, useMemo } from 'react'

interface DashboardLayoutSlotsContextValue {
  sideNav: ReactNode
  // controls: ReactNode
  // bottomNav: ReactNode
}

const dashboardLayoutSlotsContext = createContext<DashboardLayoutSlotsContextValue>({
  sideNav: null,
  // controls: null,
  // bottomNav: null,
})

function useDashboardLayoutSlots() {
  return useContext(dashboardLayoutSlotsContext)
}

interface DashboardLayoutSlotsProviderProps extends Partial<DashboardLayoutSlotsContextValue> {
  children: ReactNode
}

function DashboardLayoutSlotsProvider(props: DashboardLayoutSlotsProviderProps) {
  const slots = useDashboardLayoutSlots()
  const { children, ...providedSlots } = props

  const value = useMemo<DashboardLayoutSlotsContextValue>(
    () => ({
      sideNav: providedSlots.sideNav ?? slots.sideNav,
      //   controls: providedSlots.controls ?? slots.controls,
      //   bottomNav: providedSlots.bottomNav ?? slots.bottomNav,
    }),
    [slots, providedSlots.sideNav],
  )

  return <dashboardLayoutSlotsContext.Provider value={value}>{children}</dashboardLayoutSlotsContext.Provider>
}

export { DashboardLayoutSlotsProvider, useDashboardLayoutSlots }
export type { DashboardLayoutSlotsProviderProps }
