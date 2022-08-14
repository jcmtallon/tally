import styled from 'styled-components'
import { pickColor, typo, fg } from 'theme'

const Input = styled.input`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};

  border: 1px solid ${pickColor(c => c.stroke.neutral.default)};
  border-radius: 40px;
  padding: 6px 15px;

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }
`

export { Input }
