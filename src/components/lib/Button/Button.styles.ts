import styled from 'styled-components'
import { BaseButton } from './BaseButton'
import { ButtonColor, ButtonSize, ButtonVariant } from './ButtonTypes'
import { getVariantStyles } from './ButtonVariantStyles'
import { getSizeStyles } from './ButtonSizeStyles'
import { ActivityIndicator } from '../ActivityIndicator'

const Button = styled(BaseButton)<{
  color: ButtonColor
  size: ButtonSize
  variant: ButtonVariant
}>`
  ${props => getVariantStyles(props.variant, props.color, props.theme)};
  ${props => getSizeStyles(props.size)};
`

const Spinner = styled(ActivityIndicator).attrs({ size: 'small' })`
  color: inherit;
`

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
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

const StartIconWrapper = styled.span<{ iconOnly: boolean; spinnerVisible: boolean; size: ButtonSize }>`
  display: flex;
  padding-right: ${props => (props.iconOnly ? '0px' : iconGap[props.size])};
  // Used for maintaining the button width when displaying the loading spinner.
  visibility: ${props => (props.spinnerVisible ? 'hidden' : 'visible')};
  font-size: ${props => iconFontSize[props.size]};
`

const Label = styled.span<{ spinnerVisible: boolean }>`
  display: flex;
  // Used for maintaining the button width when displaying the loading spinner.
  visibility: ${props => (props.spinnerVisible ? 'hidden' : 'visible')};
`

export { Button, StartIconWrapper, Label, Spinner, SpinnerWrapper }
