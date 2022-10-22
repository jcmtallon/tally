import styled from 'styled-components'
import { radius } from 'theme'
import {
  Table as BaseTable,
  TableCell as BaseTableCell,
  TableContainer as BaseTableContainer,
  TableRow as BaseTableRow,
  TableBody as BaseTableBody,
  TableRowCheckbox,
  EnhanceTableHead as BaseEnhanceTableHead,
} from 'components'
import { shadow } from 'theme/shadows/shadows'

const TableContainer = styled(BaseTableContainer)`
  max-height: 700px;
  ${radius(r => r.md)};
  ${shadow(s => s.medium)};
`

const Table = styled(BaseTable)``
const EnhancedTableHead = styled(BaseEnhanceTableHead)``
const TableBody = styled(BaseTableBody)``
const TableRow = styled(BaseTableRow)``
const Cell = styled(BaseTableCell)``
const EnhancedCheckbox = styled(TableRowCheckbox)``

export { Cell, EnhancedCheckbox, Table, TableBody, TableContainer, EnhancedTableHead, TableRow }
