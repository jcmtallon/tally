import { DashboardLayout } from 'features/dashboard'
import React, { useEffect, useState } from 'react'
import { listClients } from 'services'
import { Client } from 'services/types'
import * as S from './ClientList.styles'

interface ClientListProps {
  className?: string
}

function ClientList(props: ClientListProps) {
  const [clients, setClients] = useState<Client[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await listClients({})
      setClients(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <DashboardLayout>
        <S.Wrapper className={props.className}>
          <S.TopRow>
            <S.Header>Search</S.Header>
          </S.TopRow>
          Some form
          {clients && (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.clientId}>
                    <td>{client.name}</td>
                    <td>{client.phone}</td>
                    <td>{client.email}</td>
                    <td>{client.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </S.Wrapper>
      </DashboardLayout>
    </>
  )
}

export { ClientList }
