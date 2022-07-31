import { css } from 'styled-components'

type RadiusValue = string

interface BorderRadius {
  xs: RadiusValue
  sm: RadiusValue
  md: RadiusValue
  base: RadiusValue
  lg: RadiusValue
  xl: RadiusValue
  xxl: RadiusValue
}

const borderRadius: BorderRadius = {
  xs: '4px',
  sm: '6px',
  md: '8px',
  base: '10px',
  lg: '12px',
  xl: '16px',
  xxl: '20px',
}

type FlattenRadiusValue = ReturnType<typeof css>
type ReturnTypeProps = { theme: { borderRadius: BorderRadius } }

function radius(
  pickBorderRadius: (r: BorderRadius) => RadiusValue,
): (props?: ReturnTypeProps) => FlattenRadiusValue {
  return (props?: ReturnTypeProps) => {
    if (!props?.theme?.borderRadius) {
      // eslint-disable-next-line no-console -- for improving development experience.
      console.warn(`Detected theme radius function missing context theme access`)
    }
    return css`
      border-radius: ${pickBorderRadius(props?.theme?.borderRadius || borderRadius)};
    `
  }
}

function pickRadius(
  pickBorderRadius: (r: BorderRadius) => RadiusValue,
): (props?: ReturnTypeProps) => RadiusValue {
  return (props?: ReturnTypeProps) => {
    if (!props?.theme?.borderRadius) {
      // eslint-disable-next-line no-console -- for improving development experience.
      console.warn(`Detected theme pickRadius function missing context theme access`)
    }
    return pickBorderRadius(props?.theme?.borderRadius || borderRadius)
  }
}

export { borderRadius, pickRadius, radius }
export type { BorderRadius, RadiusValue }
