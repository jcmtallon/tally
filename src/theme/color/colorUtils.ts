import { css } from 'styled-components'
import { ColorValue } from './palettes/paletteTypes'
import { ColorTokens } from './tokens/colorTokenTypes'
import { colorTokens } from './colorTheme'
import { visitedPathsProxy, getLastVisitedPath } from './devUtils'

type ReturnTypeProps = { theme: { colors: ColorTokens } }

function pickColor(pickColorValue: (c: ColorTokens) => ColorValue): (props?: ReturnTypeProps) => ColorValue {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme pickColor function missing context theme access`)
    return pickColorValue(props?.theme?.colors || colorTokens.light)
  }
}

type HumanReadableColorValue = `var(${string},${ColorValue})`

/**
 * Returns the matching color value in a human readable format that includes
 * the name of the used color token.
 */
function resolveColor(
  pickColorValue: (c: ColorTokens) => ColorValue,
  themeColorTokens: ColorTokens,
): HumanReadableColorValue {
  const tokens = visitedPathsProxy(themeColorTokens)
  const color = pickColorValue(tokens)
  const tokenPath = getLastVisitedPath(tokens)
  const humanReadableTokenName = `--colors-${tokenPath.join('-')}`

  return `var(${humanReadableTokenName}, ${color})`
}

function fg(
  pickFgColor: (f: ColorTokens['fg']) => ColorValue,
): (props?: ReturnTypeProps) => ReturnType<typeof css> {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme fg function missing context theme access`)
    return css`
      color: ${resolveColor(c => pickFgColor(c.fg), props?.theme?.colors ?? colorTokens.light)};
    `
  }
}

function pickFg(pickFgColor: (f: ColorTokens['fg']) => ColorValue): (props?: ReturnTypeProps) => ColorValue {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme pickFg function missing context theme access`)
    return resolveColor(c => pickFgColor(c.fg), props?.theme?.colors ?? colorTokens.light)
  }
}

function bg(
  pickBgColor: (b: ColorTokens['bg']) => ColorValue,
): (props?: ReturnTypeProps) => ReturnType<typeof css> {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme bg function missing context theme access`)
    return css`
      background-color: ${resolveColor(c => pickBgColor(c.bg), props?.theme?.colors ?? colorTokens.light)};
    `
  }
}

function pickBg(pickBgColor: (b: ColorTokens['bg']) => ColorValue): (props?: ReturnTypeProps) => ColorValue {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme pickBg function missing context theme access`)
    return resolveColor(c => pickBgColor(c.bg), props?.theme?.colors ?? colorTokens.light)
  }
}

function canvas(): (props?: ReturnTypeProps) => ReturnType<typeof css> {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme canvas function missing context theme access`)
    return css`
      background-color: ${resolveColor(c => c.specific.canvas, props?.theme?.colors ?? colorTokens.light)};
    `
  }
}

function pickCanvas(): (props?: ReturnTypeProps) => ColorValue {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme pickBg function missing context theme access`)
    return resolveColor(c => c.specific.canvas, props?.theme?.colors ?? colorTokens.light)
  }
}

function stroke(
  pickStrokeColor: (s: ColorTokens['stroke']) => ColorValue,
): (props?: ReturnTypeProps) => ReturnType<typeof css> {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme stroke function missing context theme access`)
    return css`
      border: 1px solid
        ${resolveColor(c => pickStrokeColor(c.stroke), props?.theme?.colors ?? colorTokens.light)};
    `
  }
}

function pickStroke(
  pickStrokeColor: (s: ColorTokens['stroke']) => ColorValue,
): (props?: ReturnTypeProps) => ColorValue {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.colors) console.warn(`Detected theme pickStroke function missing context theme access`)
    return resolveColor(c => pickStrokeColor(c.stroke), props?.theme?.colors ?? colorTokens.light)
  }
}

export { fg, pickFg, bg, pickBg, stroke, pickStroke, pickColor, canvas, pickCanvas }
