import { css } from 'styled-components'
import { typo } from 'theme'
import { ButtonSize, Css } from './ButtonTypes'

function getSizeStyles(size: ButtonSize): Css {
  const sizes: { [key in ButtonSize]: Css } = {
    medium: css`
      ${typo(t => t.body.xs)};
      padding: 6px 18px;
      border-radius: 40px;
      min-height: 24px;
    `,
    large: css`
      ${typo(t => t.body.md.strong)};
      padding: 7px 24px;
      border-radius: 50px;
      min-height: 40px;
    `,
  }

  return sizes[size]
}

export { getSizeStyles }
