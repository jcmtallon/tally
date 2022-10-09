import styled from 'styled-components'
import {
  Table as BaseTable,
  TableCell as BaseTableCell,
  TableContainer as BaseTableContainer,
  TableRow as BaseTableRow,
  TableBody as BaseTableBody,
  TableRowCheckbox,
  EnhanceTableHead as BaseEnhanceTableHead,
} from 'components'

const TableContainer = styled(BaseTableContainer)`
  max-height: 700px;
  border-radius: 12px;
`

const Table = styled(BaseTable)``
const EnhancedTableHead = styled(BaseEnhanceTableHead)``
const TableBody = styled(BaseTableBody)``
const TableRow = styled(BaseTableRow)``
const Cell = styled(BaseTableCell)``
const EnhancedCheckbox = styled(TableRowCheckbox)``

export { Cell, EnhancedCheckbox, Table, TableBody, TableContainer, EnhancedTableHead, TableRow }
