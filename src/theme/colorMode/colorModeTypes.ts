const COLOR_MODE = {
  light: 'light',
  dark: 'dark',
} as const

type ColorMode = typeof COLOR_MODE[keyof typeof COLOR_MODE]

export { COLOR_MODE }
export type { ColorMode }
