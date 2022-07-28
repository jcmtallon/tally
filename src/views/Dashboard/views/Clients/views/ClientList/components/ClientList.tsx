import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { listClients, Client } from 'services'
import * as S from './ClientList.styles'
import { ClientListSearchFormState } from './ClientListSearchForm'

interface ClientListProps {
  className?: string
}

function ClientList(props: ClientListProps) {
  const [clients, setClients] = useState<Client[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await listClients({})
      setClients(data)
    }

    fetchData()
  }, [])

  const handleClientSearch = async (state: ClientListSearchFormState) => {
    const data = await listClients({
      name: state.name || undefined,
      phone: state.phone || undefined,
    })
    setClients(data)
  }

  const handleItemClick = (clientId: string) => {
    navigate(`/dashboard/clients/${clientId}`)
  }

  return (
    <>
      <DashboardLayout>
        <S.Wrapper className={props.className}>
          <S.TopRow>
            <S.Header>Search</S.Header>
          </S.TopRow>
          <S.SearchForm onSearchClick={handleClientSearch} />
          {clients && (
            <S.TableWrapper>
              <S.Table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Correo electrónico</th>
                    <th>Dirección</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map(client => (
                    <tr key={client.clientId} onClick={() => handleItemClick(client.clientId)}>
                      <S.Cell>{client.name}</S.Cell>
                      <S.Cell>{client.phone}</S.Cell>
                      <S.Cell>{client.email}</S.Cell>
                      <S.Cell>Some long address</S.Cell>
                      <S.Cell>{client.notes}</S.Cell>
                    </tr>
                  ))}
                </tbody>
              </S.Table>
            </S.TableWrapper>
          )}
          {/* TODO: Placed here for testing purposes. Move to outside dashboard layout. */}
          <Outlet />
        </S.Wrapper>
      </DashboardLayout>
    </>
  )
}

export { ClientList }
export type { ClientListProps }
