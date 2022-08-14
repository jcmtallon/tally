import styled from 'styled-components'
import { typo, fg } from 'theme'

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;

  padding-left: 15px;

  ${fg(f => f.neutral.muted)}
  ${typo(t => t.body.sm)}
`

const Label = styled.label`
  &:first-letter {
    text-transform: uppercase;
  }
`

const Content = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export { Content, Label, Wrapper, LabelWrapper }
