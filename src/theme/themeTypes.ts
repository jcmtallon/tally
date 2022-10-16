import { BorderRadius } from './borderRadius/borderRadius'
import { ColorPalette, ColorTokens } from './color'
import { ColorMode } from './colorMode'
import { Shadows } from './shadows/shadows'
import { Transition } from './transitions/transitions'
import { FlattenTypography } from './typography/flattenTypography'

interface Theme {
  colorMode: ColorMode
  colors: ColorTokens
  palette: ColorPalette
  typography: FlattenTypography
  shadow: Shadows
  borderRadius: BorderRadius
  transition: Transition
}

export type { Theme }
