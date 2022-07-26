import { TableSorting } from 'components'
import React, { HTMLAttributes, useEffect, useMemo } from 'react'
import { Client } from 'services'
import { useParams } from 'react-router-dom'
import { useClientListSearchParams } from './useClientListSearchParams'
import * as S from './ClientList.styles'
import { useClientListState } from './useClientListState'
import { filterClientData, getCurrentPageClients } from './clientListUtils'
import { ClientListState } from './clientList.types'

interface ClientListProps extends HTMLAttributes<HTMLDivElement> {
  clients: Client[]

  onShowClientDetailsClicked?: (clientId: string) => void
  onClientDelete?: () => void
}

function ClientList(props: ClientListProps) {
  const { clients, onShowClientDetailsClicked, onClientDelete, ...otherProps } = props

  const { clientId: urlId } = useParams()

  const { clientListSearchParams, setPageParam, setLimitParam, setSortingParams, setFilterParam } =
    useClientListSearchParams()

  const [listState, dispatch] = useClientListState(clientListSearchParams)

  useEffect(() => {
    // Reset row selection every time client data gets updated.
    // E.g.: resetting selection after client deletion.
    dispatch({ type: 'changeSelected', payload: { selected: [] } })
  }, [clients, dispatch])

  useEffect(() => {
    dispatch({ type: 'changeSearchParams', payload: clientListSearchParams })
  }, [clientListSearchParams, dispatch])

  const { page, limit, sorting, filters, selected } = listState

  const searchFormChangeHandler = (filters: ClientListState['filters']) => {
    setFilterParam(filters)
  }

  const pageChangeHandler = (value: number) => {
    setPageParam(value)
  }

  const rowsPerPageChangeHandler = (value: number) => {
    setLimitParam(value)
  }

  const sortChangeHandler = (sorting: TableSorting | undefined) => {
    setSortingParams(sorting)
  }

  const selectedChangeHandler = (selected: string[]) => {
    dispatch({ type: 'changeSelected', payload: { selected } })
  }

  const filteredClients = useMemo(
    () => filterClientData(clients, { search: listState.filters.search }),
    [clients, listState.filters.search],
  )

  const currentPageClients = useMemo(
    () => getCurrentPageClients(filteredClients, { ...listState }),
    [filteredClients, listState],
  )

  const totalClients = useMemo(() => filteredClients.length, [filteredClients])

  return (
    <S.Container {...otherProps}>
      <S.SearchForm id="clientsSearchForm" values={filters} onValuesChange={searchFormChangeHandler} />
      <S.Actions
        id="clientsActions"
        selected={selected}
        onResetSelection={() => selectedChangeHandler([])}
        onClientDeleted={onClientDelete}
      />
      <S.Table
        id="clientsTable"
        clients={currentPageClients}
        sorting={sorting}
        selected={selected}
        opened={urlId}
        onRowClicked={invoice => onShowClientDetailsClicked?.(invoice)}
        onSortChanged={sortChangeHandler}
        onSelectedChanged={selectedChangeHandler}
      />
      <S.TotalCounter count={totalClients} id="clientsTotal" />
      <S.Pagination
        id="clientsPagination"
        page={page}
        rowCount={totalClients}
        rowsPerPage={limit}
        onPageChange={(_, value) => pageChangeHandler(value)}
        onRowsPerPageChange={e => rowsPerPageChangeHandler(+e.target.value)}
      />
    </S.Container>
  )
}

export { ClientList }
export type { ClientListProps }
