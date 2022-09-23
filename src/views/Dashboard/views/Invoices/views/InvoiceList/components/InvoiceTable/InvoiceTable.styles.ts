import styled from 'styled-components'
import {
  Checkbox as BaseCheckbox,
  Table as BaseTable,
  TableCell as BaseTableCell,
  TableContainer as BaseTableContainer,
  TableRow as BaseTableRow,
  TableBody as BaseTableBody,
  TableSortableCell,
  TablePagination,
  EnhanceTableHead,
} from 'components'
import { fg, typo } from 'theme'

const Container = styled.div`
  width: 100%;
`

const TableContainer = styled(BaseTableContainer)`
  max-height: 600px;
  border-radius: 12px;
`

const Table = styled(BaseTable)``

const TableHead = styled(EnhanceTableHead)``

const TableBody = styled(BaseTableBody)``
const TableRow = styled(BaseTableRow)``

const Cell = styled(BaseTableCell)<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
`

const SortableCell = styled(TableSortableCell)<{ width?: string }>`
  width: ${({ width }) => width || 'auto'};
`

const Checkbox = styled(BaseCheckbox)``

const ClientNameWrapper = styled.div``

const ClientName = styled.div`
  ${typo(t => t.body.xs.strong)};
`

const ClientMail = styled.div`
  ${typo(t => t.body.xs)};
  ${fg(f => f.neutral.muted)};
`

const Pagination = styled(TablePagination)`
  padding: 10px 0px;
`

export {
  Cell,
  Checkbox,
  Container,
  ClientName,
  ClientMail,
  ClientNameWrapper,
  Pagination,
  SortableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
}
