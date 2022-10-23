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
import { ClientInvoiceCounterDisplay, ClientTypeDisplay } from 'features/clients'

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

const InvoiceCount = styled(ClientInvoiceCounterDisplay)`
  justify-content: end;
`
const ClientName = styled(ClientTypeDisplay)``

export {
  Cell,
  ClientName,
  EnhancedCheckbox,
  EnhancedTableHead,
  InvoiceCount,
  Table,
  TableBody,
  TableContainer,
  TableRow,
}
