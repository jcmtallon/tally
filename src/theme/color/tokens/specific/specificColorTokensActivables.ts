import { ColorValue } from '../../palettes/paletteTypes'

type ActivableColors = 'primary'

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
    disable: '#E1E1E1',
    hoverMuted: '',
    activeMuted: '',
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
}

export { activableColorTokensLight, activableColorTokensDark }
export type { ActivableColorTokens }
