import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { listClients, Client } from 'services'
import * as S from './ClientList.styles'
import { ClientListSearchFormState } from './ClientListSearchForm'

interface ClientListProps {
  onCreateClientButtonClicked?: () => void
  onShowClientDetailsClicked?: (clientId: string) => void
  className?: string
}

function ClientList(props: ClientListProps) {
  const { onCreateClientButtonClicked, onShowClientDetailsClicked, ...otherProps } = props
  const [clients, setClients] = useState<Client[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await listClients({})
      setClients(data)
    }

    fetchData()
  }, [])

  // TODO: accesibilidad

  const handleClientSearch = async (state: ClientListSearchFormState) => {
    const data = await listClients({
      name: state.name || undefined,
    })
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
            <S.Table clients={clients} onRowClicked={clientId => onShowClientDetailsClicked?.(clientId)} />
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
