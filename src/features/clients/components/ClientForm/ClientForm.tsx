import React from 'react'
import { createStylableComponent } from 'utils'
import { Form, FormProps, useFieldAutoFocusEffect } from 'features/form'
import { slidePanelAnimationTimeout } from 'components'
import { ClientFormValues } from '../../hooks/useClientFormConfig'
import * as S from './ClientForm.styles'

interface ClientFormProps extends FormProps<ClientFormValues> {
  className?: string
}

function ClientForm(props: ClientFormProps) {
  const { className, ...formProps } = props

  const firstFieldRef = useFieldAutoFocusEffect(slidePanelAnimationTimeout)

  return (
    <Form {...formProps}>
      <S.FormContainer className={className}>
        <S.SelectField
          id="type"
          label="Tipo"
          forwardedRef={firstFieldRef}
          options={[
            { value: 'private', label: 'Particular' },
            { value: 'company', label: 'Empresa' },
          ]}
        />
        <S.TextField id="name" label="Nombre/Razón social" />
        <S.TextField id="taxId" label="DNI/NIE/CIF" />
        <S.SectionTitle id="contactTitle" text="Contacto" />
        <S.TextField id="mail" label="Client Email" />
        <S.TextField id="phone" label="Teléfono" />
        <S.SectionTitle id="addressTitle" text="Dirección" />
        <S.TextField id="street" label="Calle y número" />
        <S.TextField id="houseNumber" label="Número" />
        <S.TextField id="postalCode" label="Código postal" />
        <S.TextField id="city" label="Localidad" />
        <S.SectionTitle id="otherTitle" text="Otros" />
        <S.TextAreaField id="notes" label="Notas" />
      </S.FormContainer>
    </Form>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
