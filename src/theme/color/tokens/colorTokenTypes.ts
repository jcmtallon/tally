import { ColorValue } from '../palettes/paletteTypes'
import { SpecificColorTokens } from './specific/specificColorTokens'

type ColorRole = 'neutral' | 'primary' | 'highlight' | 'success' | 'warning' | 'danger'

interface ForegroundRoleColor {
  onEmphasis: ColorValue
  default: ColorValue
  muted: ColorValue
  mutedPlus: ColorValue
}

interface BackgroundRoleColor {
  emphasis: ColorValue
  default: ColorValue
  muted: ColorValue
}

interface StrokeRoleColor {
  emphasis: ColorValue
  default: ColorValue
  muted: ColorValue
}

interface ColorTokens {
  fg: Record<ColorRole, ForegroundRoleColor>
  bg: Record<ColorRole, BackgroundRoleColor>
  stroke: Record<ColorRole, StrokeRoleColor>
  specific: SpecificColorTokens
}

export type { ColorTokens }
