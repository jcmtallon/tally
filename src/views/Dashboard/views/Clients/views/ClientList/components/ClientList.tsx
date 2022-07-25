import { DashboardLayout } from 'features/dashboard'
import React, { useEffect } from 'react'
import { listClients } from 'services'
import * as S from './ClientList.styles'

interface ClientListProps {
  className?: string
}

function ClientList(props: ClientListProps) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await listClients({})
      console.log(data)
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
          Some form Some Table
        </S.Wrapper>
      </DashboardLayout>
    </>
  )
}

export { ClientList }
