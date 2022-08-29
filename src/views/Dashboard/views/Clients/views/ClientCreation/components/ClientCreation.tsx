import React, { useCallback } from 'react'
import { useClientFormConfig, ClientFormValues } from 'features/clients'
import { useFormRef } from 'features/form'
import * as S from './ClientCreation.styles'

interface ClientCreationProps {
  onClientCreated?: () => void
}

function ClientCreation(props: ClientCreationProps) {
  const { onClientCreated } = props
  const { formRef } = useFormRef<ClientFormValues>()
  const formConfig = useClientFormConfig()

  // Perdimos lo que tenemos lo del async button?
  const submitHandle = useCallback(async () => {
    formRef.current?.handleSubmit()
    onClientCreated?.()
  }, [formRef, onClientCreated])

  const handleCreateClick = async () => {
    await submitHandle()
  }

  return (
    <S.PanelLayout
      title="Crear nuevo cliente"
      footer={<S.SubmitButton onClick={handleCreateClick}>Create</S.SubmitButton>}>
      <S.FormWrapper>
        <S.Form formRef={formRef} {...formConfig} />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientCreation }
