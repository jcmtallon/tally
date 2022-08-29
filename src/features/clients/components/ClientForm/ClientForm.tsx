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
      {({ values }) => (
        <S.FormContainer className={className}>
          <S.FormField id="type" label="tipo">
            <S.TypeSelect forwardedRef={firstFieldRef} />
          </S.FormField>
          <S.TextField
            id="name"
            label={values.type === 'individual' ? 'Nombre' : 'Razón Social'} // TODO: not changing correctly
            placeholder="Maria Tormentos"
          />
          <S.TextField
            id="taxId"
            label={values.type === 'individual' ? 'DNI/NIE/TIE' : 'CIF'}
            required={false}
            placeholder="40886523F"
          />
          <S.SectionTitle id="contactTitle" text="Contacto" />
          <S.TextField id="mail" label="Client Email" required={false} placeholder="mariator@gmail.com" />
          <S.TextField
            id="phone"
            label="A horribly long telephone number"
            required={false}
            placeholder="744544765"
          />
          <S.SectionTitle id="addressTitle" text="Dirección" />
          <S.TextField
            id="street"
            label="Calle y número"
            required={false}
            placeholder="Periodista Chacón 5"
          />
          <S.TextField id="houseNumber" label="Número" required={false} placeholder="5B" />
          <S.TextField id="postalCode" label="Código postal" required={false} placeholder="54002" />
          <S.TextField id="city" label="Localidad" required={false} placeholder="Spain" />
          <S.SectionTitle id="otherTitle" text="Otros" />
          <S.TextAreaField id="notes" label="Notas" required={false} />
        </S.FormContainer>
      )}
    </Form>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
