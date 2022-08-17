import React from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientForm.styles'

interface ClientFormProps {
  className?: string
}

function ClientForm(props: ClientFormProps) {
  const { ...otherProps } = props
  return (
    <S.Container {...otherProps}>
      <div>Tipo</div>
      <S.Field label="Nombre/Razón social">
        <S.Input />
      </S.Field>
      <S.Field label="DNI/NIE/CIF">
        <S.Input />
      </S.Field>
      <S.SectionTitle title="Contacto" />
      <S.Field label="E-mail">
        <S.Input />
      </S.Field>
      <S.Field label="Teléfono">
        <S.Input />
      </S.Field>
      <S.SectionTitle title="Dirección" />
      <S.Field label="Calle y número">
        <S.Input />
      </S.Field>
      <S.Field label="Piso">
        <S.Input />
      </S.Field>
      <S.Field label="Código Postal">
        <S.Input />
      </S.Field>
      <S.Field label="Localidad">
        <S.Input />
      </S.Field>
      <S.SectionTitle title="Otros" />
      <div>Notas</div>
    </S.Container>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
