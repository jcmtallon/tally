import { SortingState } from '@tanstack/react-table'
import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { clients as apiClients, Client } from 'services'
import * as S from './ClientList.styles'
import { ClientListSearchFormState } from './ClientListSearchForm'

interface ClientListProps {
  onCreateClientButtonClicked?: () => void
  onShowClientDetailsClicked?: (clientId: string) => void
  className?: string
}

// TODO: we don't have access to search, or selected pagination or sorting from this parent component.
// Changing a controller should edit both the internal state and the URL (via callback). Then changes in
// the URL causes the page to refetch.

function ClientList(props: ClientListProps) {
  const { onCreateClientButtonClicked, onShowClientDetailsClicked, ...otherProps } = props
  const [clients, setClients] = useState<Client[]>([])

  // TODO: Place this inside view's Pagination component?
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiClients.list.query({})
      setClients(data)
    }

    fetchData()
  }, [])

  // TODO: accesibilidad

  const handleClientSearch = async (state: ClientListSearchFormState) => {
    const data = await apiClients.list.query({
      name: state.name || undefined,
    })
    setClients(data)
  }

  const handleSortChange = async (sorting: SortingState) => {
    const data = await apiClients.list.query({
      sortBy: sorting[0]?.id || undefined,
      desc: sorting[0]?.desc,
    })
    setClients(data)
  }

  const handlePreviousPageClick = async () => {
    const data = await apiClients.list.previousPage()
    setPage(page => page - 1)
    setClients(data)
  }

  const handleNextPageClick = async () => {
    const data = await apiClients.list.nextPage()
    setPage(page => page + 1)
    setClients(data)
  }

  const handleRowsPerPageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const data = await apiClients.list.changePagesize(+event.target.value)
    setRowsPerPage(+event.target.value)
    setClients(data)
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
              rowCount={-1}
              page={page}
              rowsPerPage={rowsPerPage}
              previousPageButtonProps={{ onClick: handlePreviousPageClick }}
              nextPageButtonProps={{ onClick: handleNextPageClick }}
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
