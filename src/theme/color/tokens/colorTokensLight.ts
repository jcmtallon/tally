import { lightPalette } from '../palettes/lightPalette'
import { ColorTokens } from './colorTokenTypes'

const colorTokensLightThem: ColorTokens = {
  fg: {},
  bg: {
    neutral: {
      mutedPlus: lightPalette.grey[15],
      off: lightPalette.white,
    },
  },
  stroke: {},
}

export { colorTokensLightThem }
