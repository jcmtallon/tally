import React from 'react'
import { Client } from 'services'
import { createStylableComponent } from 'utils'
import * as S from './ClientDetailsDisplay.styles'

interface ClientDetailsDisplayProps {
  client: Client

  onEditModeClick?: () => void
}

function ClientDetailsDisplay(props: ClientDetailsDisplayProps) {
  const { client, onEditModeClick } = props
  return (
    <S.PanelLayout
      title="Detalles de Cliente"
      footer={<S.EditModeButton onClick={onEditModeClick}>Editar</S.EditModeButton>}>
      {client.name}
      {client.phone}
    </S.PanelLayout>
  )
}

const StylableClientDetailsDisplay = createStylableComponent(S, ClientDetailsDisplay)

export { StylableClientDetailsDisplay as ClientDetailsDisplay }
export type { ClientDetailsDisplayProps }
