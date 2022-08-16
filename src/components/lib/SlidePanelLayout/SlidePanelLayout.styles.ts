import styled from 'styled-components'
import { typo, fg } from 'theme'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: hidden;
`

const PanelHeader = styled.div`
  margin-bottom: 16px;
  margin-bottom: 16px;
  padding: 32px 40px 0;
`

const TitleContainer = styled.div`
  ${typo(t => t.header.h4)};
  ${fg(f => f.neutral.default)};
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow-y: auto;
`
// TODO: not sure about this padding...
const Footer = styled.div`
  display: grid;
  grid-row-gap: 32px;
  padding: 32px 40px;
`

export { Wrapper, Footer, PanelHeader, TitleContainer, Content }
