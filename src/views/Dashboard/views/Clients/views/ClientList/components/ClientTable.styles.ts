import styled from 'styled-components'
import {
  Checkbox as BaseCheckbox,
  Table as BaseTable,
  TableCell as BaseTableCell,
  TableContainer as BaseTableContainer,
  TableHead as BaseTableHead,
  TableRow as BaseTableRow,
  TableBody as BaseTableBody,
  TableSortLabel,
} from 'components'

const TableContainer = styled(BaseTableContainer)`
  max-height: 600px;
  border-radius: 12px;
`

const Table = styled(BaseTable)``
const TableHead = styled(BaseTableHead)``
const TableBody = styled(BaseTableBody)``
const TableRow = styled(BaseTableRow)``
const Cell = styled(BaseTableCell)``
const SortLabel = styled(TableSortLabel)``

const Checkbox = styled(BaseCheckbox)``

export { Cell, Checkbox, Table, TableBody, TableContainer, TableHead, TableRow, SortLabel }
