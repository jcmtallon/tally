import styled from 'styled-components'
import { pickColor } from 'theme'

const Layout = styled.div`
  background-color: ${pickColor(c => c.specific.canvas)};

  display: grid;
  grid-template-columns: min-content auto;
  grid-template-areas: 'sidenav content';

  height: 100%;
  overflow: hidden;
`

const SideNav = styled.div<{ isCollapsed?: boolean }>`
  background-color: white;
  grid-area: sidenav;

  // TODO: this solution is temp:
  width: ${props => (props.isCollapsed ? 'unset' : '200px')};
`

const Content = styled.div`
  background-color: #f3f4f9;
  grid-area: content;
`

export { Layout, Content, SideNav }
