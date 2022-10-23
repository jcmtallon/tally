import styled, { css } from 'styled-components'
import { pickColor, fg, typo } from 'theme'
import { TableSize } from '../Table'
import { TableCellPaddingVariant } from './TableCell.types'

function calculatePadding(size: TableSize, padding: TableCellPaddingVariant): string {
  const sizePadding: Record<TableCellPaddingVariant, Record<TableSize, string>> = {
    none: {
      small: '0px',
      medium: '0px',
    },
    inherit: {
      small: '6px 16px',
      medium: '12px 16px',
    },
    checkbox: {
      small: '',
      medium: '12px 12px 12px 17px', // Keeps into account the left bar when a row is selected
    },
    chip: {
      small: '',
      medium: '10px 12px',
    },
  }

  return sizePadding[padding][size]
}

const Cell = styled.td<{
  size: TableSize
  padding: TableCellPaddingVariant
  stickyHeader: boolean
  textAlign: 'center' | 'inherit' | 'left' | 'right' | 'justify'
}>`
  border-bottom: 1px solid ${pickColor(s => s.stroke.neutral.muted)};
  text-align: ${props => props.textAlign};
  padding: ${({ size, padding }) => calculatePadding(size, padding)};

  ${props =>
    props.stickyHeader &&
    css`
      position: sticky;
      top: 0;
      z-index: 2;
    `}
`

const HeadCell = styled.th`
  ${fg(f => f.neutral.muted)};
  ${typo(t => t.body.md.strong)};
`

const BodyCell = styled.td`
  ${typo(t => t.body.md)};
  ${fg(f => f.neutral.default)};
`

const FootCell = styled.td``

export { HeadCell, BodyCell, FootCell, Cell }
