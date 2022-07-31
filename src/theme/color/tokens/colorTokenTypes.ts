import { ColorValue } from '../palettes/paletteTypes'
import { SpecificColorTokens } from './specific/specificColorTokens'

type ColorRole = 'neutral'

// interface ForegroundRoleColor {
//   default: ColorValue
// }

// interface BackgroundRoleColor {
//   default: ColorValue
// }

interface BackgroundRoleColor {
  mutedPlus: ColorValue
  off: ColorValue
}

// interface StrokeRoleColor {
//   default: ColorValue
// }

interface ColorTokens {
  fg: {}
  bg: Record<ColorRole, BackgroundRoleColor>
  stroke: {}
  specific: SpecificColorTokens
}

export type { ColorTokens }
