import styled from 'styled-components'
import { pickColor, typo, fg } from 'theme'

const Select = styled.select`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};

  border: 1px solid ${pickColor(c => c.stroke.neutral.default)};
  border-radius: 40px;
  padding: 6px 15px;

  width: 100%; // TODO: reconsider this behavior

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }
`

export { Select }
