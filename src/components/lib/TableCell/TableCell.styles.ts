import styled, { css } from 'styled-components'
import { pickColor, fg, typo, canvas } from 'theme'
import { TableSize } from '../Table'

function calculatePadding(size: TableSize, padding: 'none' | 'inherit'): string {
  const sizePadding: Record<TableSize, string> = {
    small: '6px 16px',
    medium: '16px',
  }

  const paddingSetting: Record<'none' | 'inherit', string> = {
    none: '0px',
    inherit: sizePadding[size],
  }

  return paddingSetting[padding]
}

const Cell = styled.td<{
  size: TableSize
  padding: 'none' | 'inherit'
  stickyHeader: boolean
  textAlign: 'center' | 'inherit' | 'left' | 'right' | 'justify'
}>`
  ${canvas()};
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
