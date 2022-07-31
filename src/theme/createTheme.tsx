import { RadiusValue } from './borderRadius/borderRadius'
import { Color, ColorValue } from './color'
import { ColorMode, COLOR_MODE } from './colorMode'
import { Shadow } from './shadows/shadows'
import { getTheme } from './theme'
import { Theme } from './themeTypes'
import { FlattenFontType } from './typography/flattenTypography'

interface CreateThemeOptions {
  colors?: Record<string, ColorValue | Record<string, ColorValue>>
  palette?: Record<string, ColorValue | Color>
  typography?: Record<string, FlattenFontType | Record<string, FlattenFontType>>
  shadow?: Record<string, Shadow>
  borderRadius?: Record<string, RadiusValue>

  // Also admits setting other theme properties and without any restrictions in the types of their values:
  [key: string]: unknown
}

type AugmentedTheme<Options extends CreateThemeOptions> = {
  colors: Theme['colors'] & Options['colors']
  palette: Theme['palette'] & Options['palette']
  typography: Theme['typography'] & Options['typography']
  shadow: Theme['shadow'] & Options['shadow']
  borderRadius: Theme['borderRadius'] & Options['borderRadius']
  colorMode: Theme['colorMode']
} & Omit<Options, 'colors' | 'palette' | 'typography' | 'shadow' | 'borderRadius' | 'zIndex'>

/**
 * Generate a Theme object where the default values are merged or even overwritten
 * with the passed custom values.
 */
function createTheme<T extends CreateThemeOptions>(
  themeOptions: T,
  themeMode?: ColorMode,
): AugmentedTheme<T> {
  const { colors, palette, typography, shadow, borderRadius, zIndex, ...rest } = themeOptions

  const defaultTheme = getTheme(themeMode || COLOR_MODE.light)

  return {
    colors: { ...defaultTheme.colors, ...colors },
    palette: { ...defaultTheme.palette, ...palette },
    typography: { ...defaultTheme.typography, ...typography },
    shadow: { ...defaultTheme.shadow, ...shadow },
    borderRadius: { ...defaultTheme.borderRadius, ...borderRadius },
    colorMode: themeMode || COLOR_MODE.light,
    ...rest,
  } as unknown as AugmentedTheme<T>
}

export { createTheme }
