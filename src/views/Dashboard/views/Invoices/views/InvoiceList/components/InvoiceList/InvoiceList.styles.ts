import { TablePagination } from 'components'
import styled from 'styled-components'
import { fg, typo } from 'theme'
import { InvoiceListActions } from '../InvoiceListActions'
import { InvoiceListSearchForm } from '../InvoiceListSearchForm'
import { InvoiceTable } from '../InvoiceTable'

const Container = styled.div`
  display: grid;
  padding: 10px;
  gap: 10px;

  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-areas:
    'invoicesSearchForm invoicesSearchForm invoicesSearchForm invoicesSearchForm'
    'invoicesActions invoicesActions invoicesActions invoicesActions'
    'invoicesTable invoicesTable invoicesTable invoicesTable'
    'invoicesTotal invoicesPagination invoicesPagination invoicesPagination';

  #invoicesSearchForm {
    grid-area: invoicesSearchForm;
  }

  #invoicesActions {
    grid-area: invoicesActions;
  }

  #invoicesTable {
    grid-area: invoicesTable;
  }

  #invoicesTotal {
    grid-area: invoicesTotal;
  }

  #invoicesPagination {
    grid-area: invoicesPagination;
  }
`

const SearchForm = styled(InvoiceListSearchForm)``

const Actions = styled(InvoiceListActions)``

const Table = styled(InvoiceTable)``

const TotalCounter = styled.div`
  ${fg(f => f.neutral.muted)};
  ${typo(t => t.body.base)};
`

const Pagination = styled(TablePagination)``

export { Actions, Container, Table, Pagination, SearchForm, TotalCounter }
