import { Theme } from 'theme'
import { ButtonColor, ButtonVariant } from './ButtonTypes'

type ColorSet = Record<'fg' | 'bg' | 'stroke', string>
type ButtonColors = Record<ButtonVariant, Record<'quiet' | 'hover' | 'active', ColorSet>>

function getPrimaryButtonColors(theme: Theme): ButtonColors {
  const fg = theme.colors.fg.neutral.onEmphasis
  const { quiet, hover, active } = theme.colors.specific.activable.primary

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
  const stroke = theme.colors.stroke.neutral.emphasis

  const { quiet, hoverMuted, activeMuted } = theme.colors.specific.activable.neutral

  const activeFg = theme.colors.fg.primary.muted

  return {
    solid: {
      quiet: { bg: quiet, fg, stroke },
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
  const bg = theme.colors.specific.canvas
  const fg = theme.colors.fg.neutral.default
  const stroke = theme.colors.stroke.neutral.default
  const strokeHighlight = theme.colors.stroke.primary.default

  const { hoverMuted, activeMuted } = theme.colors.specific.activable.highlight

  return {
    solid: {
      quiet: { bg, fg, stroke },
      hover: { bg: hoverMuted, fg, stroke: strokeHighlight },
      active: { bg: activeMuted, fg, stroke: strokeHighlight },
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
