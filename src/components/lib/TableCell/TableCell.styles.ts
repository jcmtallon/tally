import styled from 'styled-components'
import { pickColor, fg, typo } from 'theme'
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
  textAlign: 'center' | 'inherit' | 'left' | 'right' | 'justify'
}>`
  border-bottom: 1px solid ${pickColor(s => s.stroke.neutral.muted)};
  text-align: ${props => props.textAlign};
  padding: ${({ size, padding }) => calculatePadding(size, padding)};
`

const HeadCell = styled.th`
  ${fg(f => f.neutral.muted)};
  ${typo(t => t.body.md)};
`

const BodyCell = styled.td`
  ${fg(f => f.neutral.muted)};
`

const FootCell = styled.td``

export { HeadCell, BodyCell, FootCell, Cell }
