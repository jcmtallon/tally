import React from 'react'
import { createStylableComponent } from 'utils'
import { Form, FormProps } from 'features/form'
import { ClientFormValues } from '../../hooks/useClientFormConfig'
import * as S from './ClientForm.styles'

interface ClientFormProps extends FormProps<ClientFormValues> {
  className?: string
}

function ClientForm(props: ClientFormProps) {
  const { className, ...formProps } = props

  return (
    <Form {...formProps}>
      <S.Form className={className}>
        {/* TODO: replace with new field component */}
        <S.FieldOld id="type" label="Tipo">
          <S.Select>
            <option value="private">Particular</option>
            <option value="company">Empresa</option>
          </S.Select>
        </S.FieldOld>
        <S.Field id="name" label="Nombre/Razón social" />
        <S.Field id="taxId" label="DNI/NIE/CIF" />
        <S.SectionTitle id="contactTitle" text="Contacto" />
        <S.Field id="email" label="E-mail" />
        <S.Field id="phone" label="Teléfono" />
        <S.SectionTitle id="addressTitle" text="Dirección" />
        <S.Field id="street" label="Calle y número" />
        <S.Field id="houseNumber" label="Número" />
        <S.Field id="postalCode" label="Código postal" />
        <S.Field id="city" label="Localidad" />
        <S.SectionTitle id="otherTitle" text="Otros" />
        <S.Field id="notes" label="Notas">
          <S.TextArea />
        </S.Field>
      </S.Form>
    </Form>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
