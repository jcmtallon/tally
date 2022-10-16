import { Theme } from 'theme'
import { ButtonColor, ButtonVariant } from './ButtonTypes'

type ColorSet = Record<'fg' | 'bg' | 'stroke', string>
type ButtonColors = Record<ButtonVariant, Record<'quiet' | 'hover' | 'active', ColorSet>>

function getPrimaryButtonColors(theme: Theme): ButtonColors {
  const fg = theme.colors.fg.neutral.onEmphasis

  const { quiet } = theme.colors.specific.activable.primary
  const { hover } = theme.colors.specific.activable.primary
  const { active } = theme.colors.specific.activable.primary

  return {
    solid: {
      quiet: { bg: quiet, fg, stroke: quiet },
      hover: { bg: hover, fg, stroke: hover },
      active: { bg: active, fg, stroke: active },
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
