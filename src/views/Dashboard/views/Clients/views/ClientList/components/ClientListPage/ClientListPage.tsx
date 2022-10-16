import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes } from 'react'
import { Client } from 'services'
import { createStylableComponent } from 'utils'
import * as S from './ClientListPage.styles'

interface ClientListPageProps extends HTMLAttributes<HTMLDivElement> {
  clients: Client[] | undefined

  onCreateClientButtonClicked?: () => void
  onShowClientDetailsClicked?: (clientId: string) => void
}

function ClientListPage(props: ClientListPageProps) {
  const { clients, onCreateClientButtonClicked, onShowClientDetailsClicked, ...otherProps } = props
  return (
    <DashboardLayout>
      <S.Container {...otherProps}>
        <S.TopRow>
          <S.Header>
            <S.IconBox icon={<S.ClientIcon />} />
            <span>Clientes</span>
          </S.Header>
          <S.CreateClientButton startIcon={<S.PlusIcon />} onClick={onCreateClientButtonClicked}>
            Crear Cliente
          </S.CreateClientButton>
        </S.TopRow>
        {/* TODO: Loading spinner */}
        {clients && (
          <S.ClientList clients={clients} onShowClientDetailsClicked={onShowClientDetailsClicked} />
        )}
      </S.Container>
    </DashboardLayout>
  )
}

const StylableClientListPage = createStylableComponent(S, ClientListPage)

export { StylableClientListPage as ClientListPage }
export type { ClientListPageProps }
