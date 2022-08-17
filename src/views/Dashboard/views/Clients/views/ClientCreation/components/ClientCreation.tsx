import { Button } from 'components'
import React, { useCallback } from 'react'
import { useClientFormConfig, ClientFormValues } from 'features/clients'
import { useFormRef } from 'features/form'
import * as S from './ClientCreation.styles'

function ClientCreation() {
  const { formRef, form } = useFormRef<ClientFormValues>()
  const formConfig = useClientFormConfig()

  const submitHandle = useCallback(async () => {
    form?.handleSubmit()
  }, [form])

  const handleCreateClick = async () => {
    await submitHandle()
  }

  return (
    <S.PanelLayout title="Crear nuevo cliente" footer={<Button onClick={handleCreateClick}>Create</Button>}>
      <S.FormWrapper>
        <S.Form formRef={formRef} {...formConfig} />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientCreation }
