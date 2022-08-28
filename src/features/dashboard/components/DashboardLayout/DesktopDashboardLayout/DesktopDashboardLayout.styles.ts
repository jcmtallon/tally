import styled from 'styled-components'
import { canvas, pickColor } from 'theme'

const Layout = styled.div`
  background-color: ${pickColor(c => c.specific.canvas)};

  display: grid;
  grid-template-columns: min-content auto;
  grid-template-areas: 'sidenav content';

  height: 100%;
  overflow: hidden;
`

const SideNav = styled.div<{ isCollapsed?: boolean }>`
  ${canvas()}
  grid-area: sidenav;

  // TODO: this solution is temp:
  width: ${props => (props.isCollapsed ? 'unset' : '200px')};
`

const Content = styled.div`
  //TODO: Prevent the scroll from affecting the container width
  overflow-y: auto;
  background-color: #f3f4f9;
  grid-area: content;
`

export { Layout, Content, SideNav }
