import styled from 'styled-components'
import { pickColor, typo, fg } from 'theme'

const Select = styled.select<{ rounded: Boolean }>`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};

  border: 1px solid ${pickColor(c => c.stroke.neutral.default)};
  border-radius: ${props => (props.rounded ? '40px' : '6px')};
  padding: 6px 15px;

  width: 100%; // TODO: reconsider this behavior

  min-height: 40px;

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }

  &:focus-visible {
    --outline-color: ${pickColor(c => c.stroke.primary.default)};
    --outline-offset: -1px;
    border-color: ${pickColor(c => c.stroke.primary.default)};
  }
`

const Option = styled.option``

export { Select, Option }
