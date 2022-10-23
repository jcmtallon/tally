import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes } from 'react'
import { Client } from 'services'
import { createStylableComponent } from 'utils'
import * as S from './ClientListPage.styles'

interface ClientListPageProps extends HTMLAttributes<HTMLDivElement> {
  clients: Client[] | undefined
  fetching?: boolean

  onClientDelete?: () => void
  onCreateClientButtonClicked?: () => void
  onShowClientDetailsClicked?: (clientId: string) => void
}

function ClientListPage(props: ClientListPageProps) {
  const {
    clients,
    fetching,
    onClientDelete,
    onCreateClientButtonClicked,
    onShowClientDetailsClicked,
    ...otherProps
  } = props
  return (
    <DashboardLayout>
      <S.Container {...otherProps}>
        <S.TopRow onCreateClientButtonClicked={onCreateClientButtonClicked} />
        {fetching && <S.Backdrop />}
        {clients && (
          <S.ClientList
            clients={clients}
            onShowClientDetailsClicked={onShowClientDetailsClicked}
            onClientDelete={onClientDelete}
          />
        )}
      </S.Container>
    </DashboardLayout>
  )
}

const StylableClientListPage = createStylableComponent(S, ClientListPage)

export { StylableClientListPage as ClientListPage }
export type { ClientListPageProps }
