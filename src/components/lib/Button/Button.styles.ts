import styled from 'styled-components'
import { pickColor } from 'theme'
import { BaseButton } from './BaseButton'

const Button = styled(BaseButton)`
  border: 1px solid ${pickColor(s => s.stroke.neutral.default)};
  border-radius: 50px;
  padding: 6px 24px;
`

export { Button }
