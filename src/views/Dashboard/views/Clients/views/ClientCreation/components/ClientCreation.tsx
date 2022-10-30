import React, { useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useClientCreationFormConfig, ClientCreationFormValues } from 'features/clients'
import { useFormRef } from 'features/form'
import { toast } from 'react-toastify'
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
      toast.error('Contiene errores', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }, [formRef, onClientCreated])

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
