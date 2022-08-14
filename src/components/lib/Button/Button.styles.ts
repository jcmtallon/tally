import styled from 'styled-components'
import { BaseButton } from './BaseButton'
import { ButtonColor, ButtonSize, ButtonVariant } from './ButtonTypes'
import { getVariantStyles } from './ButtonVariantStyles'
import { getSizeStyles } from './ButtonSizeStyles'

const Button = styled(BaseButton)<{
  color: ButtonColor
  size: ButtonSize
  variant: ButtonVariant
}>`
  ${props => getVariantStyles(props.variant, props.color, props.theme)};
  ${props => getSizeStyles(props.size)};
`

export { Button }
