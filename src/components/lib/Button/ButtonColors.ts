import { Theme } from 'theme'
import { ButtonColor, ButtonVariant } from './ButtonTypes'

type ColorSet = Record<'fg' | 'bg' | 'stroke', string>
type ButtonColors = Record<ButtonVariant, Record<'quiet' | 'hover' | 'active', ColorSet>>

function getPrimaryButtonColors(theme: Theme): ButtonColors {
  return {
    solid: {
      quiet: {
        bg: theme.colors.bg.primary.emphasis,
        fg: theme.colors.fg.neutral.onEmphasis,
        stroke: theme.colors.bg.primary.emphasis,
      },
      hover: { bg: '', fg: '', stroke: '' },
      active: { bg: '', fg: '', stroke: '' },
    },
  }
}

function getNeutralButtonColors(theme: Theme): ButtonColors {
  return {
    solid: {
      quiet: {
        bg: theme.colors.bg.neutral.default,
        fg: theme.colors.fg.neutral.default,
        stroke: theme.colors.stroke.neutral.emphasis,
      },
      hover: { bg: '', fg: '', stroke: '' },
      active: { bg: '', fg: '', stroke: '' },
    },
  }
}

function getHighlightButtonColors(theme: Theme): ButtonColors {
  return {
    solid: {
      quiet: {
        bg: theme.colors.specific.canvas,
        fg: theme.colors.fg.neutral.default,
        stroke: theme.colors.stroke.neutral.default,
      },
      hover: { bg: '', fg: '', stroke: '' },
      active: { bg: '', fg: '', stroke: '' },
    },
  }
}

function getButtonColors(theme: Theme): Record<ButtonColor, ButtonColors> {
  return {
    primary: getPrimaryButtonColors(theme),
    neutral: getNeutralButtonColors(theme),
    highlight: getHighlightButtonColors(theme),
  }
}

export { getButtonColors }
