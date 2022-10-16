import { css } from 'styled-components'
import { typo } from 'theme'
import { ButtonSize, Css } from './ButtonTypes'

function getSizeStyles(size: ButtonSize): Css {
  const sizes: { [key in ButtonSize]: Css } = {
    small: css`
      ${typo(t => t.body.xs.strong)};
      padding: 7px 16px;
      border-radius: 30px;
      min-height: 32px;
    `,
    regular: css`
      ${typo(t => t.body.md.strong)};
      padding: 9px 20px;
      border-radius: 40px;
      min-height: 40px;
    `,
    large: css`
      ${typo(t => t.body.base.strong)};
      padding: 11px 28px;
      border-radius: 50px;
      min-height: 48px;
    `,
  }

  return sizes[size]
}

export { getSizeStyles }
