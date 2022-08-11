import { ColorTokens } from './colorTokenTypes'
import { specificTokensLight } from './specific/specificColorTokens'

// TODO: use palette colors instead.

const colorTokensLight: ColorTokens = {
  fg: {
    neutral: {
      onEmphasis: '#FFFFFF',
      default: '#142244',
      muted: '#60748C',
      mutedPlus: '#8DA3B9',
    },
    primary: {
      onEmphasis: '',
      default: '#0F6FDE',
      muted: '#309AED',
      mutedPlus: '#47A6EF',
    },
    highlight: {
      onEmphasis: '',
      default: '',
      muted: '',
      mutedPlus: '',
    },
    success: {
      onEmphasis: '',
      default: '#64CB8E',
      muted: '',
      mutedPlus: '',
    },
    warning: {
      onEmphasis: '',
      default: '',
      muted: '',
      mutedPlus: '',
    },
    danger: {
      onEmphasis: '',
      default: '',
      muted: '',
      mutedPlus: '',
    },
  },
  bg: {
    neutral: {
      emphasis: '#24292E',
      default: '#F3F4F9',
      muted: '',
    },
    primary: {
      emphasis: '#0F6FDE',
      default: '#DBEAFA',
      muted: '#F3F9FE',
    },
    highlight: {
      emphasis: '#60748C',
      default: '#F6F6F8',
      muted: '',
    },
    success: {
      emphasis: '#64CB8E',
      default: '#E0F5E8',
      muted: '',
    },
    warning: {
      emphasis: '',
      default: '',
      muted: '',
    },
    danger: {
      emphasis: '',
      default: '',
      muted: '',
    },
  },
  stroke: {
    neutral: {
      emphasis: '#2F3C59',
      default: '#BCD0DF',
      muted: '#E5F0F8',
    },
    primary: {
      emphasis: '',
      default: '#309AED',
      muted: '',
    },
    highlight: {
      emphasis: '',
      default: '',
      muted: '',
    },
    success: {
      emphasis: '',
      default: '',
      muted: '',
    },
    warning: {
      emphasis: '',
      default: '',
      muted: '',
    },
    danger: {
      emphasis: '',
      default: '',
      muted: '',
    },
  },
  specific: specificTokensLight,
}

export { colorTokensLight }
