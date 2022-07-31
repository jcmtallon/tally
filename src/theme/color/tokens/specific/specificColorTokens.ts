import { colorPaletteDark } from '../../palettes/colorPaletteDark'
import { colorPaletteLight } from '../../palettes/colorPaletteLight'
import { ColorValue } from '../../palettes/paletteTypes'

interface SpecificColorTokens {
  canvas: ColorValue
}

const specificTokensLight: SpecificColorTokens = {
  canvas: colorPaletteLight.white,
}

const specificTokensDark: SpecificColorTokens = {
  canvas: colorPaletteDark.grey[85],
}

export { specificTokensLight, specificTokensDark }
export type { SpecificColorTokens }
