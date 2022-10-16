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
    ghost: {
      quiet: { bg: 'transparent', fg: quiet, stroke: 'transparent' },
      hover: { bg: hover, fg: hover, stroke: hover },
      active: { bg: active, fg: active, stroke: active },
    },
  }
}

function getNeutralButtonColors(theme: Theme): ButtonColors {
  const fg = theme.colors.fg.neutral.default

  const { hoverMuted } = theme.colors.specific.activable.neutral
  const { activeMuted } = theme.colors.specific.activable.neutral

  const activeFg = theme.colors.fg.primary.muted

  return {
    solid: {
      quiet: {
        bg: theme.colors.bg.neutral.default,
        fg,
        stroke: theme.colors.stroke.neutral.emphasis,
      },
      hover: { bg: '', fg: '', stroke: '' },
      active: { bg: '', fg: '', stroke: '' },
    },
    ghost: {
      quiet: { bg: 'transparent', fg, stroke: 'transparent' },
      hover: { bg: hoverMuted, fg, stroke: hoverMuted },
      active: { bg: activeMuted, fg: activeFg, stroke: activeMuted },
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
    ghost: {
      quiet: { bg: '', fg: '', stroke: '' },
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
