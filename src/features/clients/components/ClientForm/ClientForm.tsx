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
      <S.FormContainer className={className}>
        {/* TODO: replace with new field component */}
        <S.Field id="type" label="Tipo">
          <S.Select>
            <option value="private">Particular</option>
            <option value="company">Empresa</option>
          </S.Select>
        </S.Field>
        <S.TextField id="name" label="Nombre/Razón social" />
        <S.TextField id="taxId" label="DNI/NIE/CIF" />
        <S.SectionTitle id="contactTitle" text="Contacto" />
        <S.TextField id="email" label="E-mail" />
        <S.TextField id="phone" label="Teléfono" />
        <S.SectionTitle id="addressTitle" text="Dirección" />
        <S.TextField id="street" label="Calle y número" />
        <S.TextField id="houseNumber" label="Número" />
        <S.TextField id="postalCode" label="Código postal" />
        <S.TextField id="city" label="Localidad" />
        <S.SectionTitle id="otherTitle" text="Otros" />
        <S.Field id="notes" label="Notas">
          <S.TextArea />
        </S.Field>
      </S.FormContainer>
    </Form>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
