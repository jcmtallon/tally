import styled, { css } from 'styled-components'
import { bg, canvas, pickColor } from 'theme'

const TableRow = styled.tr<{ shadeOnHover: boolean; selected: boolean; animate: boolean }>`
  position: relative;
  vertical-align: middle;
  ${canvas()};

  ${({ shadeOnHover }) =>
    shadeOnHover &&
    css`
      :hover {
        background-color: #fbfcfd;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${pickColor(c => c.bg.primary.muted)};

      ::after {
        top: 0px;
        left: 0px;
        width: 5px;
        content: '';
        height: 100%;
        position: absolute;
        ${bg(b => b.primary.emphasis)};
      }
    `}

    ${({ shadeOnHover, selected }) =>
    shadeOnHover &&
    selected &&
    css`
      :hover {
        background-color: #ecf6fd;
      }
    `}

  ${({ animate }) =>
    animate &&
    css`
      animation: shade 2s linear;

      @keyframes shade {
        0%,
        100% {
          background-color: ${pickColor(c => c.specific.canvas)};
        }
        50% {
          background-color: ${props => props.theme.palette.yellow[15]};
        }
      }
    `}
  
  :last-child td {
    border-bottom: none;
  }
`

export { TableRow }
