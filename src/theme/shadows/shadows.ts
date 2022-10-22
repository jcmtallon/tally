import { transparentize } from 'polished'
import { css } from 'styled-components'

type Shadow = string

interface Shadows {
  small: Shadow
  medium: Shadow
  large: Shadow
}

const lightModeShadows: Shadows = {
  small: `0 16px 48px 0 ${transparentize(0.92, 'black')}`,
  medium: `rgb(95 116 141 / 3%) 0px 2px 1px -1px, rgb(95 116 141 / 4%) 0px 1px 1px 0px,
  rgb(95 116 141 / 8%) 0px 1px 3px 0px;`,
  large: `0 16px 48px 0 ${transparentize(0.84, 'black')}`,
}

// Shadows do not work well in dark themes, even if your background is not 100% black.
// Better to disable shadows for dark mode and use different strategies to create visual
// hierarchy.
// See: https://uxmisfit.com/2020/09/14/ui-tutorial-6-tips-to-make-better-dark-theme/
const darkModeShadows: Shadows = {
  small: 'none',
  medium: 'none',
  large: 'none',
}

const shadows: Record<'light' | 'dark', Shadows> = {
  light: lightModeShadows,
  dark: darkModeShadows,
}

type FlattenShadow = ReturnType<typeof css>
type ReturnTypeProps = { theme: { shadow: Shadows } }

function shadow(pick: (s: Shadows) => Shadow): (props?: ReturnTypeProps) => FlattenShadow {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.shadow) console.warn(`Detected theme shadow function missing context theme access`)
    return css`
      box-shadow: ${pick(props?.theme?.shadow || shadows.light)};
    `
  }
}

function pickShadow(pick: (s: Shadows) => Shadow): (props?: ReturnTypeProps) => Shadow {
  return (props?: ReturnTypeProps) => {
    // eslint-disable-next-line no-console -- for improving development experience.
    if (!props?.theme?.shadow) console.warn(`Detected theme pickShadow function missing context theme access`)
    return pick(props?.theme?.shadow || shadows.light)
  }
}

export { shadows, shadow, pickShadow }
export type { Shadows, Shadow }
