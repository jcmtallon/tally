import { TablePagination } from 'components'
import styled from 'styled-components'
import { ClientListActions } from '../ClientListActions'
import { ClientListSearchForm } from '../ClientListSearchForm'
import { ClientListTotalCount } from '../ClientListTotalCount'
import { ClientTable } from '../ClientTable'

const Container = styled.div`
  display: grid;
  padding: 10px 20px;
  gap: 10px;

  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-areas:
    'clientsSearchForm clientsSearchForm clientsSearchForm clientsSearchForm'
    'clientsActions clientsActions clientsActions clientsActions'
    'clientsTable clientsTable clientsTable clientsTable'
    'clientsTotal clientsPagination clientsPagination clientsPagination';

  #clientsSearchForm {
    grid-area: clientsSearchForm;
  }

  #clientsActions {
    grid-area: clientsActions;
  }

  #clientsTable {
    grid-area: clientsTable;
  }

  #clientsTotal {
    grid-area: clientsTotal;
  }

  #clientsPagination {
    grid-area: clientsPagination;
  }
`

const SearchForm = styled(ClientListSearchForm)``

const Actions = styled(ClientListActions)``

const Table = styled(ClientTable)``

const TotalCounter = styled(ClientListTotalCount)`
  padding-left: 18px;
`

const Pagination = styled(TablePagination)``

export { Actions, Container, Table, Pagination, TotalCounter, SearchForm }
