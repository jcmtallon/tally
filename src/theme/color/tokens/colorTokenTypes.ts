import { ColorValue } from '../palettes/paletteTypes'

// interface ForegroundRoleColor {
//   default: ColorValue
// }

// interface BackgroundRoleColor {
//   default: ColorValue
// }

interface BackgroundNeutralColor {
  mutedPlus: ColorValue
  off: ColorValue
}

// interface StrokeRoleColor {
//   default: ColorValue
// }

interface ColorTokens {
  fg: {}

  bg: {
    neutral: BackgroundNeutralColor
  }

  stroke: {}
}

export type { ColorTokens }
