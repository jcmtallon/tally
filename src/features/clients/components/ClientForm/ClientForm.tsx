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
        <S.FormField id="type" label="tipo">
          <S.TypeSelect forwardedRef={firstFieldRef} />
        </S.FormField>
        <S.TextField id="name" label="Nombre/Razón social" />
        <S.TextField id="taxId" label="DNI/NIE/CIF" required={false} />
        <S.SectionTitle id="contactTitle" text="Contacto" />
        <S.TextField id="mail" label="Client Email" required={false} />
        <S.TextField id="phone" label="Teléfono" required={false} />
        <S.SectionTitle id="addressTitle" text="Dirección" />
        <S.TextField id="street" label="Calle y número" required={false} />
        <S.TextField id="houseNumber" label="Número" required={false} />
        <S.TextField id="postalCode" label="Código postal" required={false} />
        <S.TextField id="city" label="Localidad" required={false} />
        <S.SectionTitle id="otherTitle" text="Otros" />
        <S.TextAreaField id="notes" label="Notas" required={false} />
      </S.FormContainer>
    </Form>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
