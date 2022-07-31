import { ColorMode } from '../colorMode'
import { colorPaletteDark } from './palettes/colorPaletteDark'
import { colorPaletteLight } from './palettes/colorPaletteLight'
import { ColorPalette } from './palettes/paletteTypes'
import { ColorTokens } from './tokens/colorTokenTypes'
import { colorTokensDark } from './tokens/colorTokensDark'
import { colorTokensLight } from './tokens/colorTokensLight'

type ColorTheme = ColorMode

const colorPalettes: Record<ColorTheme, ColorPalette> = {
  light: colorPaletteLight,
  dark: colorPaletteDark,
}

const colorTokens: Record<ColorTheme, ColorTokens> = {
  light: colorTokensLight,
  dark: colorTokensDark,
}

export { colorPalettes, colorTokens }
