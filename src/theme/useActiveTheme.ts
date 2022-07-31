import { useReducer } from 'react'
import { ColorMode, getLocalColorMode } from './colorMode'
import { createTheme } from './createTheme'
import { Theme } from './themeTypes'

type State = {
  themes: Theme[]
  activeTheme: Theme
}

const changeColorMode = (colorMode: ColorMode) => ({
  type: 'changeColorMode' as const,
  payload: { colorMode },
})

type Action = ReturnType<typeof changeColorMode>

function updateState(state: State, colorMode: ColorMode): State {
  const colorModeMatchingTheme = state.themes.find(t => t.colorMode === colorMode)
  const newActiveTheme = colorModeMatchingTheme ?? state.themes[0] ?? createTheme({}, colorMode)
  const themes = state.themes.length > 0 ? state.themes : [newActiveTheme]

  return { themes, activeTheme: newActiveTheme }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeColorMode':
      return updateState(state, action.payload.colorMode)

    default:
      return state
  }
}

type InitialValue = {
  themes: Theme[] | undefined
  colorMode: ColorMode | undefined
}

function mapInitConfigToInitialState(initialValue: InitialValue): State {
  const { themes, colorMode } = initialValue
  const activeColorMode = colorMode ?? getLocalColorMode()

  if (!themes) {
    const defaultTheme = createTheme({}, colorMode)
    return { themes: [defaultTheme], activeTheme: defaultTheme }
  }

  const colorModeMatchingTheme = themes.find(t => t.colorMode === activeColorMode)
  if (colorModeMatchingTheme)
    return {
      themes,
      activeTheme: colorModeMatchingTheme,
    }

  return { themes, activeTheme: themes[0] }
}

function useActiveTheme(initialValue: InitialValue) {
  const [state, dispatch] = useReducer(reducer, initialValue, mapInitConfigToInitialState)
  return [state, dispatch] as const
}

export { useActiveTheme, mapInitConfigToInitialState, reducer }
