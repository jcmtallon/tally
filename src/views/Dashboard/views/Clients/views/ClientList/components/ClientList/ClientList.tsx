import { TableSorting } from 'components'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Client } from 'services'
import { listClients } from 'services/services/clients/listClients'
import { useValueRef } from 'hooks'
import { useClientListSearchParams } from './useClientListSearchParams'
import * as S from './ClientList.styles'
import { useClientListState } from './useClientListState'
import { clientListSearchParamsToApiOptions as paramsToApiOpts } from './clientListUtils'
import { ClientListState } from './clientList.types'

interface ClientListProps extends HTMLAttributes<HTMLDivElement> {
  onShowClientDetailsClicked?: (clientId: string) => void
}

function ClientList(props: ClientListProps) {
  const { onShowClientDetailsClicked, ...otherProps } = props

  const { clientListSearchParams, setPageParam, setLimitParam, setSortingParams, setFilterParam } =
    useClientListSearchParams()

  const [listState, dispatch] = useClientListState()
  const [clients, setClients] = useState<Client[] | undefined>(undefined)
  const [totalClients, setTotalClients] = useState<number>(0)

  const [isFetching, setIsFetching] = useState(false)
  const isFetchingRef = useValueRef(isFetching)

  useEffect(() => {
    dispatch({ type: 'changeSearchParams', payload: clientListSearchParams })
  }, [clientListSearchParams, dispatch])

  // TODO: fetching changing too often
  // TODO: going to create, removes filters.

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      const response = await listClients(paramsToApiOpts(listState))
      setTotalClients(response.total)
      setClients(response.data)
      setIsFetching(false)
    }

    if (isFetchingRef.current === false) fetchData()
  }, [listState, isFetchingRef])

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

  // TODO: improve on this experience.
  if (isFetching && clients === undefined) return <div>Loading!</div>

  return (
    <S.Container {...otherProps}>
      <S.SearchForm id="clientsSearchForm" values={filters} onValuesChange={searchFormChangeHandler} />
      <S.Actions id="clientsActions" selected={selected} />
      <S.Table
        id="clientsTable"
        clients={clients}
        sorting={sorting}
        selected={selected}
        onRowClicked={invoice => onShowClientDetailsClicked?.(invoice)}
        onSortChanged={sortChangeHandler}
        onSelectedChanged={selectedChangeHandler}
      />
      <S.TotalCounter id="clientsTotal">{`${totalClients} resultados`}</S.TotalCounter>
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
