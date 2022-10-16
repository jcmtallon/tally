import { borderRadius } from './borderRadius/borderRadius'
import { colorTokens, colorPalettes } from './color'
import { ColorMode } from './colorMode'
import { shadows } from './shadows/shadows'
import { Theme } from './themeTypes'
import { transitions } from './transitions/transitions'
import { flattenTypography } from './typography'

function getTheme(mode: ColorMode = 'light'): Theme {
  return {
    colorMode: mode,
    colors: colorTokens[mode],
    palette: colorPalettes[mode],
    typography: flattenTypography,
    shadow: shadows[mode],
    borderRadius,
    transition: transitions,
  }
}

export { getTheme }
