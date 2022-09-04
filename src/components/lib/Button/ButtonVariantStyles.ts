import { css } from 'styled-components'
import { getTheme, Theme } from 'theme'
import { getButtonColors } from './ButtonColors'
import { ButtonColor, ButtonVariant, Css } from './ButtonTypes'

function isEmphasisColorButton(color: ButtonColor): boolean {
  return ['primary'].includes(color)
}

function getSolidStyles(color: ButtonColor, theme: Theme): Css {
  const buttonColors = getButtonColors(theme)
  const { quiet } = buttonColors[color].solid

  return css`
    color: ${quiet.fg};
    background-color: ${quiet.bg};
    border-color: ${quiet.stroke};

    &:focus-visible {
      --outline-offset: ${isEmphasisColorButton(color) ? '1px' : '-2px'};
    }

    &:disabled {
      opacity: 0.3;
    }
  `
}

function getVariantStyles(variant: ButtonVariant, roleColor: ButtonColor, theme: Theme): Css {
  const t = Object.keys(theme).length > 0 ? theme : getTheme()
  const variants: { [key in ButtonVariant]: (c: ButtonColor) => Css } = {
    solid: (c: ButtonColor) => getSolidStyles(c, t),
  }

  return variants[variant](roleColor)
}

export { getVariantStyles }
