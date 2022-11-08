import { ClientUpdateFormValues, useClientUpdateFormConfig } from 'features/clients'
import { useFormRef } from 'features/form'
import isEmpty from 'lodash/isEmpty'
import React, { useCallback, useState } from 'react'
import { Client } from 'services'
import { showErrorToast } from 'features/toasts'
import * as S from './ClientDetailsEdition.styles'

interface ClientDetailsEditionProps {
  client: Client

  onClientUpdate?: () => void
  onClientDelete?: () => void
  onEditModeCancel?: () => void
}

function ClientDetailsEdition(props: ClientDetailsEditionProps) {
  const { client, onClientUpdate, onEditModeCancel, onClientDelete } = props

  const [isDirty, setIsDirty] = useState<boolean>(false)

  const { formRef } = useFormRef<ClientUpdateFormValues>()
  const formConfig = useClientUpdateFormConfig(client)

  const handleEditClick = useCallback(async () => {
    await formRef.current?.submitForm()
    if (isEmpty(formRef.current?.errors)) {
      onClientUpdate?.()
    } else {
      showErrorToast('Contiene errores')
    }
  }, [formRef, onClientUpdate])

  const handleCancelClick = useCallback(async () => {
    onEditModeCancel?.()
  }, [onEditModeCancel])

  const handleDeleteClick = useCallback(async () => {
    onClientDelete?.()
  }, [onClientDelete])

  return (
    <S.PanelLayout
      title="Detalles de Cliente"
      footer={
        <S.Footer>
          <S.EditModeButtonWrapper>
            <S.SubmitButton disabled={!isDirty} onClick={handleEditClick}>
              Guardar
            </S.SubmitButton>
            <S.CancelButton onClick={handleCancelClick}>Cancel</S.CancelButton>
          </S.EditModeButtonWrapper>
          <S.DeleteButton onClick={handleDeleteClick}>Borrar</S.DeleteButton>
        </S.Footer>
      }>
      <S.FormWrapper>
        <S.Form formRef={formRef} {...formConfig} onDirtyChange={setIsDirty} />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientDetailsEdition }
