import { TableSorting } from 'components'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Client } from 'services'
import { listClients } from 'services/services/clients/listClients'
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

  const [{ page, limit, sorting, filters, selected }, dispatch] = useClientListState()
  const [clients, setClients] = useState<Client[]>([])
  const [totalClients, setTotalClients] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await listClients(paramsToApiOpts(clientListSearchParams))
      setTotalClients(response.total)
      setClients(response.data)
    }

    dispatch({ type: 'changeSearchParams', payload: clientListSearchParams })
    fetchData()
  }, [clientListSearchParams, dispatch])

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

  console.log('limit', limit)

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
