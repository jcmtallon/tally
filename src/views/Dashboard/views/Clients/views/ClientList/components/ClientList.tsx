import { SortingState } from '@tanstack/react-table'
import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { clients as apiClients, Client } from 'services'
import { useClientListSearchParams } from '../hooks/useClientListSearchParams'
import * as S from './ClientList.styles'
import { ClientListSearchFormState } from './ClientListSearchForm'

interface ClientListProps extends HTMLAttributes<HTMLDivElement> {
  onCreateClientButtonClicked?: () => void
  onShowClientDetailsClicked?: (clientId: string) => void
}

// TODO: Initial query running twice?? Check out why

function ClientList(props: ClientListProps) {
  const { onCreateClientButtonClicked, onShowClientDetailsClicked, ...otherProps } = props

  const { searchParamsQuery, setLimitParams, setSortingParams, setFilterParams } = useClientListSearchParams()
  const [clients, setClients] = useState<Client[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiClients.list()
      setClients(data)
      setPage(0)
    }

    fetchData()
  }, [])

  const handleClientSearch = async (state: ClientListSearchFormState) => {
    setFilterParams(state)
  }

  const handleSortChange = (sorting: SortingState) => {
    setSortingParams(sorting)
  }

  const handleRowsPerPageChange = (value: number) => {
    setLimitParams(value)
    setPage(0)
  }

  const handlePreviousPageClick = async () => {
    setPage(page => page - 1)
  }

  const handleNextPageClick = async () => {
    setPage(page => page + 1)
  }

  return (
    <>
      <DashboardLayout>
        <S.Container {...otherProps}>
          <S.TopRow>
            <S.Header>Clientes</S.Header>
            <S.CreateClientButton onClick={onCreateClientButtonClicked}>Crear cliente</S.CreateClientButton>
          </S.TopRow>
          <S.SearchForm onSearchClick={handleClientSearch} />
          <S.TableActionsBar>
            <S.TableStatsWrapper>
              <div>cargos 0€</div>
              <div>ganancias 0€</div>
            </S.TableStatsWrapper>
            <S.TableActionsWrapper>
              <div>2 seleccionados</div>
              <S.TableActionButton onClick={() => null}>Borrar</S.TableActionButton>
            </S.TableActionsWrapper>
          </S.TableActionsBar>
          <S.TableWrapper>
            <S.Table
              clients={clients}
              onRowClicked={clientId => onShowClientDetailsClicked?.(clientId)}
              onSortingChange={handleSortChange}
            />
            <S.TablePagination
              page={page}
              resultsCount={clients.length}
              onPreviousPageButtonClicked={handlePreviousPageClick}
              onNextPageButtonClicked={handleNextPageClick}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </S.TableWrapper>
          {/* TODO: Placed here for testing purposes. Move to outside dashboard layout. */}
          <Outlet />
        </S.Container>
      </DashboardLayout>
    </>
  )
}

export { ClientList }
export type { ClientListProps }
