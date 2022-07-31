import { ColorMode, COLOR_MODE } from './colorModeTypes'

function getLocalColorMode(): ColorMode {
  if (window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches) {
    return COLOR_MODE.dark
  }

  return COLOR_MODE.light
}

export { getLocalColorMode }
