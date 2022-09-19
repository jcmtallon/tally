import { TablePagination } from 'components'
import styled from 'styled-components'
import { InvoiceTable } from '../InvoiceTable'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 10px;
`

const Table = styled(InvoiceTable)``

const Pagination = styled(TablePagination)``

export { Container, Table, Pagination }
