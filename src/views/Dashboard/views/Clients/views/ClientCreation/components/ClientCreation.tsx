import React, { useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useClientCreationFormConfig, ClientCreationFormValues } from 'features/clients'
import { useFormRef } from 'features/form'
import { showErrorToast } from 'features/toasts'
import * as S from './ClientCreation.styles'

interface ClientCreationProps {
  onClientCreated?: () => void
}

function ClientCreation(props: ClientCreationProps) {
  const { onClientCreated } = props
  const { formRef } = useFormRef<ClientCreationFormValues>()
  const formConfig = useClientCreationFormConfig()

  const handleCreateClick = useCallback(async () => {
    await formRef.current?.submitForm()
    if (isEmpty(formRef.current?.errors)) {
      onClientCreated?.()
    } else {
      showErrorToast('Contiene errores')
    }
  }, [formRef, onClientCreated])

  return (
    <S.PanelLayout
      title="Crear nuevo cliente"
      footer={<S.SubmitButton onClick={handleCreateClick}>Crear</S.SubmitButton>}>
      <S.FormWrapper>
        <S.Form formRef={formRef} {...formConfig} />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientCreation }
