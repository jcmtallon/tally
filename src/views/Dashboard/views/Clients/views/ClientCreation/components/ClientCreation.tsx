import React from 'react'
import * as S from './ClientCreation.styles'

function ClientCreation() {
  return (
    <S.PanelLayout title="Crear nuevo cliente" footer="Create">
      <S.FormWrapper>
        <S.Form />
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientCreation }
