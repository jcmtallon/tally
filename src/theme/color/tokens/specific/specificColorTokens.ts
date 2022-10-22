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
  focusOutline: ColorValue
}

const specificTokensLight: SpecificColorTokens = {
  canvas: colorPaletteLight.white,
  activable: activableColorTokensLight,
  focusOutline: '#0F6FDE',
  disabledText: '#8DA3B9',
}

const specificTokensDark: SpecificColorTokens = {
  canvas: colorPaletteDark.grey[85],
  activable: activableColorTokensDark,
  focusOutline: '#0F6FDE',
  disabledText: '#8DA3B9',
}

export { specificTokensLight, specificTokensDark }
export type { SpecificColorTokens }
