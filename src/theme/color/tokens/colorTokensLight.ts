import { colorPaletteLight } from '../palettes/colorPaletteLight'
import { ColorTokens } from './colorTokenTypes'
import { specificTokensLight } from './specific/specificColorTokens'

const colorTokensLight: ColorTokens = {
  fg: {},
  bg: {
    neutral: {
      mutedPlus: colorPaletteLight.grey[15],
      off: colorPaletteLight.white,
    },
  },
  stroke: {},
  specific: specificTokensLight,
}

export { colorTokensLight }
