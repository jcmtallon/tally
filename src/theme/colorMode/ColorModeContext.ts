import { createContext, useContext } from 'react'
import { ColorMode, COLOR_MODE } from './colorModeTypes'

interface ColorModeContext {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
}

const colorModeContext = createContext<ColorModeContext>({
  colorMode: COLOR_MODE.light,
  setColorMode: () => undefined,
})

function useColorModeContext() {
  return useContext(colorModeContext)
}

const ColorModeProvider = colorModeContext.Provider

export { ColorModeProvider, useColorModeContext }
export type { ColorModeContext }
