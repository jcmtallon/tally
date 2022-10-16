import styled from 'styled-components'
import { pickColor, typo, fg, canvas } from 'theme'

const Wrapper = styled.div<{ showError: Boolean; rounded: Boolean }>`
  display: inline-flex;
  align-items: center;
  position: relative;

  width: 100%; // TODO: reconsider this behavior

  border-radius: ${props => (props.rounded ? '40px' : '6px')};
  ${canvas()};

  border: 1px solid
    ${props => pickColor(c => (props.showError ? c.stroke.danger.default : c.stroke.neutral.default))};

  :focus-within {
    outline: 1px solid ${pickColor(c => c.stroke.primary.default)};
    border-color: ${pickColor(c => c.stroke.primary.default)};
  }
`

const Input = styled.input`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};
  background-color: transparent;

  padding: 6px 15px;
  width: 100%; // TODO: reconsider this behavior
  min-height: 40px;

  border: none;

  &::placeholder {
    ${fg(f => f.neutral.mutedPlus)};
  }

  &:focus-visible {
    outline: none;
  }
`

const EndAdornmentWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0px 12px;
`

export { Input, Wrapper, EndAdornmentWrapper }
