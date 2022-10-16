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

const iconFontSize: Record<ButtonSize, string> = {
  small: '1rem',
  regular: '1.25rem',
  large: '1.5rem',
}

const iconGap: Record<ButtonSize, string> = {
  small: '0.375rem',
  regular: '0.4375rem',
  large: '0.5rem',
}

const StartIconWrapper = styled.span<{ iconOnly: boolean; size: ButtonSize }>`
  display: flex;
  padding-right: ${props => (props.iconOnly ? '0px' : iconGap[props.size])};
  font-size: ${props => iconFontSize[props.size]};
`

const Label = styled.span`
  display: flex;
`

export { Button, StartIconWrapper, Label }
