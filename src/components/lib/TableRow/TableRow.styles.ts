import styled, { css } from 'styled-components'
import { bg, canvas, pickColor } from 'theme'

const TableRow = styled.tr<{ shadeOnHover: boolean; selected: boolean }>`
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
  
  :last-child td {
    border-bottom: none;
  }
`

export { TableRow }
