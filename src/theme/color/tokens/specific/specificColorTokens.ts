import { colorPaletteDark } from '../../palettes/colorPaletteDark'
import { colorPaletteLight } from '../../palettes/colorPaletteLight'
import { ColorValue } from '../../palettes/paletteTypes'
import {
  activableColorTokensDark,
  activableColorTokensLight,
  ActivableColorTokens,
} from './specificColorTokensActivables'

interface SpecificColorTokens {
  canvas: ColorValue
  activable: ActivableColorTokens
  disabledText: ColorValue
}

const specificTokensLight: SpecificColorTokens = {
  canvas: colorPaletteLight.white,
  activable: activableColorTokensLight,
  disabledText: '#A4A4A4',
}

const specificTokensDark: SpecificColorTokens = {
  canvas: colorPaletteDark.grey[85],
  activable: activableColorTokensDark,
  disabledText: '#A4A4A4',
}

export { specificTokensLight, specificTokensDark }
export type { SpecificColorTokens }
