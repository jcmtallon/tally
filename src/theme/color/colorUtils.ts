import { css } from 'styled-components'
import { ColorValue } from './palettes/paletteTypes'
import { ColorTokens } from './tokens/colorTokenTypes'
import { colorTokensLightThem } from './tokens/colorTokensLight'

function pickColor(pickColorValue: (c: ColorTokens) => ColorValue): ColorValue {
  return pickColorValue(colorTokensLightThem)
}

function fg(pickFgColor: (f: ColorTokens['fg']) => ColorValue): ReturnType<typeof css> {
  return css`
    color: ${pickColor(c => pickFgColor(c.fg))};
  `
}

function bg(pickBgColor: (b: ColorTokens['bg']) => ColorValue): ReturnType<typeof css> {
  return css`
    background-color: ${pickColor(c => pickBgColor(c.bg))};
  `
}

function stroke(pickStrokeColor: (s: ColorTokens['stroke']) => ColorValue): ReturnType<typeof css> {
  return css`
    border: 1px solid ${pickColor(c => pickStrokeColor(c.stroke))};
  `
}

export { fg, bg, stroke, pickColor }
