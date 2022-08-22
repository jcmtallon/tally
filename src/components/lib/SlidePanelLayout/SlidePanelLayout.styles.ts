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
  padding: 28px 40px 16px;
`

const TitleContainer = styled.div`
  ${typo(t => t.header.h5)};
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
  padding: 16px 40px 28px;
`

export { Wrapper, Footer, PanelHeader, TitleContainer, Content }
