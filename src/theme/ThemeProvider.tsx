import React, { ReactNode, useEffect, useState } from 'react'
import {
  ThemedStyledFunction,
  ThemeProvider as StyledComponentsThemeProvider,
  useTheme,
} from 'styled-components'
import { ColorMode, ColorModeProvider, getLocalColorMode } from './colorMode'
import { Theme } from './themeTypes'
import { useActiveTheme } from './useActiveTheme'

interface ThemeProviderProps {
  children?: ReactNode
  themes?: Theme[]
  colorMode?: ColorMode
}

function ThemeProvider(props: ThemeProviderProps) {
  const { themes, colorMode: configColorMode } = props
  const [colorMode, setColorMode] = useState<ColorMode>(configColorMode ?? getLocalColorMode())
  const [state, dispatch] = useActiveTheme({ themes, colorMode })

  useEffect(() => {
    if (configColorMode) setColorMode(configColorMode)
  }, [configColorMode])

  // Updates active when colorMode changes
  useEffect(() => {
    dispatch({ type: 'changeColorMode', payload: { colorMode } })
  }, [colorMode, dispatch])

  return (
    <ColorModeProvider value={{ colorMode, setColorMode }}>
      <StyledComponentsThemeProvider theme={state.activeTheme}>
        {props.children}
      </StyledComponentsThemeProvider>
    </ColorModeProvider>
  )
}

export { ThemeProvider, useTheme }
export type { ThemedStyledFunction }
