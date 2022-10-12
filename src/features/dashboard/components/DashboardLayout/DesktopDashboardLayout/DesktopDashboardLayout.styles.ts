import styled, { css } from 'styled-components'
import { canvas, pickColor } from 'theme'
import { SideNavLink } from '../../SideNav/SideNavLink'
import { SideNavSectionHeader } from '../../SideNav/SideNavSectionHeader'

const Layout = styled.div`
  background-color: ${pickColor(c => c.specific.canvas)};

  display: grid;
  grid-template-columns: min-content auto;
  grid-template-areas: 'sidenav content';

  height: 100%;
  overflow: hidden;
`

const SideNav = styled.div<{ isCollapsed?: boolean }>`
  padding: 16px 8px;
  grid-area: sidenav;
  ${canvas()}

  ${SideNavLink.S.NavLink} {
    margin-bottom: 8px;
  }

  ${SideNavLink.S.Label} {
    transition: all 100ms ease-in-out;
    width: 160px;
    opacity: 1;

    ${({ isCollapsed }) =>
      isCollapsed &&
      css`
        margin: 0;
        padding: 0;
        width: 0;
        opacity: 0;
        overflow: hidden;
      `}
  }

  ${SideNavSectionHeader.S.Wrapper} {
    transition: opacity 100ms ease-in-out;
    opacity: 1;

    ${({ isCollapsed }) =>
      isCollapsed &&
      css`
        opacity: 0;
        width: 0;
        overflow: hidden;
      `}
  }
`

const Content = styled.div`
  //TODO: Prevent the scroll from affecting the container width
  overflow-y: auto;
  background-color: #f3f4f9;
  grid-area: content;
`

export { Layout, Content, SideNav }
