import { ColorTokens, colorTokensLightThem } from './color'
import { FlattenTypography, flattenTypography } from './typography'

interface AthlosTheme {
  typography: FlattenTypography
  color: ColorTokens
}

const theme: AthlosTheme = {
  typography: flattenTypography,
  color: colorTokensLightThem,
}

export { theme }
export type { AthlosTheme }
