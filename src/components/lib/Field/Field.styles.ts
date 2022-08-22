import styled from 'styled-components'
import { typo, fg } from 'theme'

const LabelWrapper = styled.div<{ withOffset: boolean; focused: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;

  padding-left: ${props => (props.withOffset ? '15px' : '0px')};
  padding-bottom: 1px;

  ${props => fg(f => (props.focused ? f.primary.default : f.neutral.muted))};
  ${typo(t => t.body.sm)};

  &:focus-within {
    color: blue;
  }
`

const Label = styled.label`
  &:first-letter {
    text-transform: uppercase;
  }
`

const Content = styled.div``

const Error = styled.div<{ withOffset: boolean }>`
  ${fg(f => f.danger.default)};
  ${typo(t => t.body.sm)};
  display: flex;
  flex-direction: column;

  padding-left: ${props => (props.withOffset ? '15px' : '0px')};
  padding-bottom: 2px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export { Content, Label, Wrapper, LabelWrapper, Error }
