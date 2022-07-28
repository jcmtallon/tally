import { createContext, useContext } from 'react'

interface SlidePanelControls {
  open(): void
  close(): void
  toggleOpen(open?: boolean | undefined): void
}

const slidePanelControlsContext = createContext<SlidePanelControls>({
  open: () => undefined,
  close: () => undefined,
  toggleOpen: () => undefined,
})

function useSlidePanelControls() {
  return useContext(slidePanelControlsContext)
}

const SlidePanelControlsProvider = slidePanelControlsContext.Provider

export { SlidePanelControlsProvider, useSlidePanelControls }
export type { SlidePanelControls }
