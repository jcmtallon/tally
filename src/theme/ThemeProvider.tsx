import React, { ReactNode } from 'react'
import { ThemeProvider as BaseThemeProvider, useTheme, ThemedStyledFunction } from 'styled-components'
import { theme } from './theme'

interface ThemeProviderProps {
  children?: ReactNode
}

function ThemeProvider(props: ThemeProviderProps) {
  return <BaseThemeProvider theme={theme}>{props.children}</BaseThemeProvider>
}

export { ThemeProvider, useTheme }
export type { ThemedStyledFunction }
