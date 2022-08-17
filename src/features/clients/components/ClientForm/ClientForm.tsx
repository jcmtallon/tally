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
      <S.Field id="type" label="Tipo">
        <S.Select>
          <option value="private">Particular</option>
          <option value="company">Empresa</option>
        </S.Select>
      </S.Field>
      <S.Field id="name" label="Nombre/Razón social">
        <S.Input />
      </S.Field>
      <S.Field id="identification" label="DNI/NIE/CIF">
        <S.Input />
      </S.Field>
      <S.SectionTitle id="contact_title" text="Contacto" />
      <S.Field id="email" label="E-mail">
        <S.Input />
      </S.Field>
      <S.Field id="phone" label="Teléfono">
        <S.Input />
      </S.Field>
      <S.SectionTitle id="address_title" text="Dirección" />
      <S.Field id="street" label="Calle y número">
        <S.Input />
      </S.Field>
      <S.Field id="house_number" label="Piso">
        <S.Input />
      </S.Field>
      <S.Field id="postal_code" label="Código Postal">
        <S.Input />
      </S.Field>
      <S.Field id="city" label="Localidad">
        <S.Input />
      </S.Field>
      <S.SectionTitle id="other_title" text="Otros" />
      <S.Field id="notes" label="Notas">
        <S.TextArea />
      </S.Field>
    </S.Container>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
