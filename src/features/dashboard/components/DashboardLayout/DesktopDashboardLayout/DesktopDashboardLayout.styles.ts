import styled from 'styled-components'
import { bg } from 'theme'

const Layout = styled.div`
  ${bg(b => b.neutral.off)}

  display: grid;
  grid-template-columns: min-content auto;
  grid-template-areas: 'sidenav content';

  height: 100%;
  overflow: hidden;
`

const SideNav = styled.div<{ isCollapsed?: boolean }>`
  ${bg(b => b.neutral.off)}
  grid-area: sidenav;

  // TODO: this solution is temp:
  width: ${props => (props.isCollapsed ? 'unset' : '200px')};
`

const Content = styled.div`
  ${bg(b => b.neutral.mutedPlus)}
  grid-area: content;
`

export { Layout, Content, SideNav }
