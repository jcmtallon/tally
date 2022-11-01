import { ClientUpdateFormValues, useClientUpdateFormConfig } from 'features/clients'
import { useFormRef } from 'features/form'
import isEmpty from 'lodash/isEmpty'
import React, { useCallback, useState } from 'react'
import { Client } from 'services'
import { showErrorToast } from 'features/toasts'
import * as S from './ClientEdition.styles'

interface ClientEditionProps {
  client: Client

  onClientUpdated?: () => void
}

function ClientEdition(props: ClientEditionProps) {
  const { client, onClientUpdated } = props

  const [isDirty, setIsDirty] = useState<boolean>(false)

  const { formRef } = useFormRef<ClientUpdateFormValues>()
  const formConfig = useClientUpdateFormConfig(client)

  const handleEditClick = useCallback(async () => {
    await formRef.current?.submitForm()
    if (isEmpty(formRef.current?.errors)) {
      onClientUpdated?.()
    } else {
      showErrorToast('Contiene errores')
    }
  }, [formRef, onClientUpdated])

  return (
    <S.PanelLayout
      title="Detalles de Cliente"
      footer={
        <S.SubmitButton disabled={!isDirty} onClick={handleEditClick}>
          Guardar
        </S.SubmitButton>
      }>
      <S.FormWrapper>
        <S.Form formRef={formRef} {...formConfig} onDirtyChange={setIsDirty} />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientEdition }
