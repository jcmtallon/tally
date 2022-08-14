import { css } from 'styled-components'

type Css = ReturnType<typeof css>

type ButtonVariant = 'solid'
type ButtonColor = 'neutral' | 'primary' | 'highlight'
type ButtonSize = 'medium' | 'large'

export type { ButtonVariant, ButtonColor, ButtonSize, Css }
