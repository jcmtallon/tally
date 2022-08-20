import styled from 'styled-components'
import { pickColor, typo, fg } from 'theme'

const Input = styled.input<{ showError: Boolean }>`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};

  border: 1px solid
    ${props => pickColor(c => (props.showError ? c.stroke.danger.default : c.stroke.neutral.default))};
  border-radius: 40px;
  padding: 6px 15px;

  width: 100%; // TODO: reconsider this behavior

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }
`

export { Input }
