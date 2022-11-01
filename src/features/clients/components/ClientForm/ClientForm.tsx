import React from 'react'
import { createStylableComponent } from 'utils'
import { Form, FormEffect, FormProps, useFieldAutoFocusEffect } from 'features/form'
import { slidePanelAnimationTimeout } from 'components'
import { CLIENT_TYPE } from 'services'
import { ClientFormValues } from '../../hooks/useClientFormConfig'
import * as S from './ClientForm.styles'

interface ClientFormProps extends FormProps<ClientFormValues> {
  className?: string
  onDirtyChange?: (dirty: boolean) => void
}

function ClientForm(props: ClientFormProps) {
  const { className, onDirtyChange, ...formProps } = props

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
            label={values.type === CLIENT_TYPE.INDIVIDUAL ? 'Nombre' : 'Razón Social'}
            placeholder="Maria Tormentos"
          />
          <S.TextField
            id="taxId"
            label={values.type === CLIENT_TYPE.INDIVIDUAL ? 'DNI/NIE/TIE' : 'CIF'}
            required={false}
            placeholder="40886523F"
          />
          <S.SectionTitle id="contactTitle" text="Contacto" />
          <S.TextField id="mail" label="Client Email" required={false} placeholder="mariator@gmail.com" />
          <S.TextField id="phone" label="Telephone" required={false} placeholder="744544765" />
          <S.SectionTitle id="addressTitle" text="Dirección" />
          <S.TextField
            id="street"
            label="Calle y número"
            required={false}
            placeholder="Periodista Chacón 5"
          />
          <S.TextField id="postalCode" label="Código postal" required={false} placeholder="54002" />
          <S.TextField id="city" label="Localidad" required={false} placeholder="Spain" />
          <S.SectionTitle id="otherTitle" text="Otros" />
          <S.TextAreaField id="notes" label="Notas" required={false} />
          <FormEffect onDirtyChange={onDirtyChange} />
        </S.FormContainer>
      )}
    </Form>
  )
}

const StylableClientForm = createStylableComponent(S, ClientForm)

export { StylableClientForm as ClientForm }
export type { ClientFormProps }
