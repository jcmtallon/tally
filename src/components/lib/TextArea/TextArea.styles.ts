import styled from 'styled-components'
import { pickColor, typo, fg } from 'theme'

const TextArea = styled.textarea<{ showError: Boolean; rounded: Boolean }>`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};

  border: 1px solid
    ${props => pickColor(c => (props.showError ? c.stroke.danger.default : c.stroke.neutral.default))};

  border-radius: ${props => (props.rounded ? '40px' : '6px')};
  padding: 6px 15px;

  width: 100%; // TODO: reconsider this behavior

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }

  &:focus-visible {
    --outline-offset: -1px;
    border-color: ${pickColor(c => c.stroke.primary.default)};
  }
`

export { TextArea }
