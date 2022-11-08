import React from 'react'
import { Client, CLIENT_TYPE } from 'services'
import { createStylableComponent } from 'utils'
import * as S from './ClientDetailsDisplay.styles'

interface ClientDetailsDisplayProps {
  client: Client

  onEditModeClick?: () => void
}

function ClientDetailsDisplay(props: ClientDetailsDisplayProps) {
  const { client, onEditModeClick } = props
  const { name, clientType, taxId, email, phone, address, notes } = client

  return (
    <S.PanelLayout
      title="Detalles de Cliente"
      footer={
        <S.Footer>
          <S.EditModeButton onClick={onEditModeClick}>Editar</S.EditModeButton>
          <S.DeleteButton onClick={() => null}>Borrar</S.DeleteButton>
        </S.Footer>
      }>
      <S.Wrapper>
        <S.DetailsSection>
          <S.FieldName>Nombre</S.FieldName>
          <S.FieldValue>
            <S.ClientName clientName={name} clientType={clientType || CLIENT_TYPE.INDIVIDUAL} />
          </S.FieldValue>
          <S.FieldName>Identificación</S.FieldName>
          <S.FieldValue>{taxId || '-'}</S.FieldValue>
          <S.FieldName>E-mail</S.FieldName>
          <S.FieldValue>{email || '-'}</S.FieldValue>
          <S.FieldName>Teléfono</S.FieldName>
          <S.FieldValue>{phone || '-'}</S.FieldValue>
          <S.FieldName>Dirección</S.FieldName>
          {/* Abstract component for rendering address together */}
          <S.FieldValue>{`${address.street} ${address.postalCode} ${address.city}` || '-'}</S.FieldValue>
          <S.FieldName>Notas</S.FieldName>
          <S.FieldValue>{notes || '-'}</S.FieldValue>
        </S.DetailsSection>
        <S.InvoicesSection>
          <S.SectionTitle>
            <span>Facturas</span>
            <S.InvoiceCreateButton tabIndex={0} role="button" onClick={() => {}} />
          </S.SectionTitle>
        </S.InvoicesSection>
      </S.Wrapper>
    </S.PanelLayout>
  )
}

const StylableClientDetailsDisplay = createStylableComponent(S, ClientDetailsDisplay)

export { StylableClientDetailsDisplay as ClientDetailsDisplay }
export type { ClientDetailsDisplayProps }
