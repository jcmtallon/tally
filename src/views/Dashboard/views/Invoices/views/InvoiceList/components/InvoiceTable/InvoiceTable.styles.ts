import styled from 'styled-components'
import {
  Table as BaseTable,
  TableCell as BaseTableCell,
  TableContainer as BaseTableContainer,
  TableRow as BaseTableRow,
  TableBody as BaseTableBody,
  TableRowCheckbox,
  TablePagination,
  EnhanceTableHead as BaseEnhanceTableHead,
} from 'components'
import { fg, typo } from 'theme'

const TableContainer = styled(BaseTableContainer)`
  max-height: 600px;
  border-radius: 12px;
`

const Table = styled(BaseTable)``
const EnhancedTableHead = styled(BaseEnhanceTableHead)``
const TableBody = styled(BaseTableBody)``
const TableRow = styled(BaseTableRow)``
const Cell = styled(BaseTableCell)``
const EnhancedCheckbox = styled(TableRowCheckbox)``

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
  EnhancedCheckbox,
  ClientName,
  ClientMail,
  ClientNameWrapper,
  Pagination,
  Table,
  TableBody,
  TableContainer,
  EnhancedTableHead,
  TableRow,
}
