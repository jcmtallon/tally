import styled, { css } from 'styled-components'
import { canvas, pickColor } from 'theme'

const TableRow = styled.tr<{ shadeOnHover: boolean; selected: boolean }>`
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
