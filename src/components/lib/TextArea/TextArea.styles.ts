import styled from 'styled-components'
import { pickColor, typo, fg } from 'theme'

const TextArea = styled.textarea<{ rounded: Boolean }>`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};

  border: 1px solid ${pickColor(c => c.stroke.neutral.default)};
  border-radius: ${props => (props.rounded ? '40px' : '10px')};
  padding: 6px 15px;

  width: 100%; // TODO: reconsider this behavior

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }
`

export { TextArea }
