import { colorPaletteLight } from '../palettes/colorPaletteLight'
import { ColorTokens } from './colorTokenTypes'
import { specificTokensDark } from './specific/specificColorTokens'

const colorTokensDark: ColorTokens = {
  fg: {},
  bg: {
    neutral: {
      mutedPlus: colorPaletteLight.grey[15],
      off: colorPaletteLight.white,
    },
  },
  stroke: {},
  specific: specificTokensDark,
}

export { colorTokensDark }
