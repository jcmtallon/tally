import { ClientUpdateFormValues, useClientUpdateFormConfig } from 'features/clients'
import { useFormRef } from 'features/form'
import React from 'react'
import { Client } from 'services'
import * as S from './ClientEdition.styles'

interface ClientEditionProps {
  client: Client
}

function ClientEdition(props: ClientEditionProps) {
  const { client } = props
  const { formRef } = useFormRef<ClientUpdateFormValues>()
  const formConfig = useClientUpdateFormConfig(client)

  const handleEditClick = async () => {
    //
  }

  return (
    <S.PanelLayout
      title="Detalles de Cliente"
      footer={<S.SubmitButton onClick={handleEditClick}>Create</S.SubmitButton>}>
      <S.FormWrapper>
        Form goes here
        <S.Form formRef={formRef} {...formConfig} />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientEdition }
