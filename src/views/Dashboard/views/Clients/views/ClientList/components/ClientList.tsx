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
          {clients && (
            <S.TableWrapper>
              <S.Table>
                <S.Thead>
                  <tr>
                    <S.Th>
                      <S.Checkbox />
                    </S.Th>
                    <S.Th>Nombre</S.Th>
                    <S.Th>E-mail</S.Th>
                    <S.Th>Teléfono</S.Th>
                    <S.Th>Facturas</S.Th>
                    <S.Th>Creado</S.Th>
                  </tr>
                </S.Thead>
                <tbody>
                  {clients.map(client => (
                    <S.Tr key={client.clientId} onClick={() => onShowClientDetailsClicked?.(client.clientId)}>
                      <S.Cell>
                        <S.Checkbox />
                      </S.Cell>
                      <S.Cell>{client.name}</S.Cell>
                      <S.Cell>{client.phone}</S.Cell>
                      <S.Cell>{client.email}</S.Cell>
                      <S.Cell>Some long address</S.Cell>
                      <S.Cell>{client.notes}</S.Cell>
                    </S.Tr>
                  ))}
                </tbody>
              </S.Table>
            </S.TableWrapper>
          )}
          {/* TODO: Placed here for testing purposes. Move to outside dashboard layout. */}
          <Outlet />
        </S.Container>
      </DashboardLayout>
    </>
  )
}

export { ClientList }
export type { ClientListProps }
