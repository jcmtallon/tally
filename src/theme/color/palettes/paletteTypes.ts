type ColorShadeIndex = 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85
type ColorValue = string

type Color = Record<ColorShadeIndex, ColorValue>

interface ColorPalette {
  readonly white: ColorValue
  readonly black: ColorValue
  readonly transparent: ColorValue
  readonly blue: Color
  readonly green: Color
  readonly grey: Color
  readonly red: Color
  readonly yellow: Color
}

export type { ColorPalette, ColorValue }
