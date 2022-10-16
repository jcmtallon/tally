import { css } from 'styled-components'
import { getTheme, Theme } from 'theme'
import { getButtonColors } from './ButtonColors'
import { ButtonColor, ButtonVariant, Css } from './ButtonTypes'

function isEmphasisColorButton(color: ButtonColor): boolean {
  return ['primary'].includes(color)
}

function getSolidStyles(color: ButtonColor, theme: Theme): Css {
  const buttonColors = getButtonColors(theme)
  const { quiet, hover, active } = buttonColors[color].solid

  return css`
    color: ${quiet.fg};
    background-color: ${quiet.bg};
    border-color: ${quiet.stroke};

    &:hover {
      color: ${hover.fg};
      background-color: ${hover.bg};
      border-color: ${hover.stroke};
    }

    &:active {
      color: ${active.fg};
      background-color: ${active.bg};
      border-color: ${active.stroke};
    }

    &:focus-visible {
      --outline-offset: ${isEmphasisColorButton(color) ? '1px' : '-2px'};
    }

    &:disabled {
      color: ${theme.colors.specific.disabledText};
      background-color: ${theme.colors.specific.activable.primary.disable};
      border-color: ${theme.colors.specific.activable.primary.disable};
    }
  `
}

function getGhostStyles(color: ButtonColor, theme: Theme): Css {
  const buttonColors = getButtonColors(theme)
  const { active, hover, quiet } = buttonColors[color].ghost

  return css`
    color: ${quiet.fg};
    background-color: ${quiet.bg};
    border-color: ${quiet.stroke};

    &:hover {
      color: ${hover.fg};
      background-color: ${hover.bg};
      border-color: ${hover.stroke};
    }

    &:active {
      color: ${active.fg};
      background-color: ${active.bg};
      border-color: ${active.stroke};
    }

    &:focus-visible {
      --outline-offset: -2px;
    }

    &:disabled {
      color: ${theme.colors.specific.disabledText};
      background-color: 'transparent';
      border-color: 'transparent';
    }
  `
}

function getVariantStyles(variant: ButtonVariant, roleColor: ButtonColor, theme: Theme): Css {
  const t = Object.keys(theme).length > 0 ? theme : getTheme()
  const variants: { [key in ButtonVariant]: (c: ButtonColor) => Css } = {
    solid: (c: ButtonColor) => getSolidStyles(c, t),
    ghost: (c: ButtonColor) => getGhostStyles(c, t),
  }

  return variants[variant](roleColor)
}

export { getVariantStyles }
