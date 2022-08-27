import styled from 'styled-components'
import { pickColor, fg, typo } from 'theme'
import { TableSize } from '../Table'

const Cell = styled.td<{ size: TableSize; textAlign: 'center' | 'inherit' | 'left' | 'right' | 'justify' }>`
  border-bottom: 1px solid ${pickColor(s => s.stroke.neutral.muted)};
  text-align: ${props => props.textAlign};
  padding: ${props => (props.size === 'medium' ? '16px' : '6px 16px')};
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
