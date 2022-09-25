import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientListPage.styles'

interface ClientListPageProps extends HTMLAttributes<HTMLDivElement> {
  onCreateClientButtonClicked?: () => void
  onShowClientDetailsClicked?: (clientId: string) => void
}

function ClientListPage(props: ClientListPageProps) {
  const { onCreateClientButtonClicked, onShowClientDetailsClicked, ...otherProps } = props
  return (
    <DashboardLayout>
      <S.Container {...otherProps}>
        <S.TopRow>
          <S.Header>Clientes</S.Header>
          <S.CreateClientButton onClick={onCreateClientButtonClicked}>Crear Cliente</S.CreateClientButton>
        </S.TopRow>
        <S.ClientList onShowClientDetailsClicked={onShowClientDetailsClicked} />
      </S.Container>
    </DashboardLayout>
  )
}

const StylableClientListPage = createStylableComponent(S, ClientListPage)

export { StylableClientListPage as ClientListPage }
export type { ClientListPageProps }
