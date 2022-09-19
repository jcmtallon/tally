import styled from 'styled-components'
import {
  Checkbox as BaseCheckbox,
  Table as BaseTable,
  TableCell as BaseTableCell,
  TableContainer as BaseTableContainer,
  TableHead as BaseTableHead,
  TableRow as BaseTableRow,
  TableBody as BaseTableBody,
  TableSortableCell,
  TablePagination,
} from 'components'

const Container = styled.div`
  width: 100%;
`

const TableContainer = styled(BaseTableContainer)`
  max-height: 600px;
  border-radius: 12px;
`

const Table = styled(BaseTable)``
const TableHead = styled(BaseTableHead)``
const TableBody = styled(BaseTableBody)``
const TableRow = styled(BaseTableRow)``
const Cell = styled(BaseTableCell)``
const SortableCell = styled(TableSortableCell)``

const Checkbox = styled(BaseCheckbox)``

const Pagination = styled(TablePagination)`
  padding: 10px 0px;
`

export {
  Cell,
  Checkbox,
  Container,
  Pagination,
  SortableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
}
