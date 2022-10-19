import { ColorValue } from '../../palettes/paletteTypes'

// TODO: highlight button colors
// TODO: delete button in select label
// TODO: Table container with shadow
// TODO: Table navigation

type ActivableColors = 'primary' | 'neutral' | 'highlight'

interface ActivableStateColors {
  /** Default state color. When the element is neither hovered, active, disabled, etc. */
  quiet: ColorValue

  /** Hover state color  */
  hover: ColorValue

  /** Hover state but with a lesser intensity. Useful for subtle shades. */
  hoverMuted: ColorValue

  /** Active state color */
  active: ColorValue

  /** Active state but with a lesser intensity. Useful for subtle shades. */
  activeMuted: ColorValue

  /** Disable state color */
  disable: ColorValue
}

type ActivableColorTokens = Record<ActivableColors, ActivableStateColors>

// TODO: Use palette colors

const activableColorTokensLight: ActivableColorTokens = {
  primary: {
    quiet: '#0F6FDE',
    hover: '#0C5CB8',
    active: '#084B98',
    disable: '#e4e9ee',
    hoverMuted: '',
    activeMuted: '',
  },
  neutral: {
    quiet: '#8299B1',
    hover: '#6489B1',
    active: '#557392',
    disable: '',
    hoverMuted: '#F8F9FC',
    activeMuted: '#f3f9fe',
  },
  highlight: {
    quiet: '',
    hover: '',
    active: '',
    disable: '',
    hoverMuted: '#F7FBFE',
    activeMuted: '#f3f9fe',
  },
}

const activableColorTokensDark: ActivableColorTokens = {
  primary: {
    quiet: '#0F6FDE',
    hover: '#0C5CB8',
    active: '#084B98',
    disable: '#E1E1E1',
    hoverMuted: '',
    activeMuted: '',
  },
  neutral: {
    quiet: '',
    hover: '',
    active: '',
    disable: '',
    hoverMuted: '#F8F9FC',
    activeMuted: '#f3f9fe',
  },
  highlight: {
    quiet: '',
    hover: '',
    active: '',
    disable: '',
    hoverMuted: '#F7FBFE',
    activeMuted: '#f3f9fe',
  },
}

export { activableColorTokensLight, activableColorTokensDark }
export type { ActivableColorTokens }
