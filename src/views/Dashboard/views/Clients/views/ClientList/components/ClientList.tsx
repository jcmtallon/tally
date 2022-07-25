import { DashboardLayout } from 'features/dashboard'
import React from 'react'
import * as S from './ClientList.styles'

interface ClientListProps {
  className?: string
}

function ClientList(props: ClientListProps) {
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
