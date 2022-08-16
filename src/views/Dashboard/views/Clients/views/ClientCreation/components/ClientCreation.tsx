import React from 'react'
import * as S from './ClientCreation.styles'

function ClientCreation() {
  return (
    <S.PanelLayout title="Crear nuevo cliente" footer="Create">
      <S.FormWrapper>
        <S.Form>
          <div>Tipo</div>
          <div>Nombre</div>
          <div>Identificación</div>
          <div>Contacto</div>
          <div>E-mail</div>
          <div>Teléfono</div>
          <div>Dirección</div>
          <div>Calle y número</div>
          <div>Piso</div>
          <div>Código postal</div>
          <div>Localidad</div>
          <div>Otros</div>
          <div>Notas</div>
          <div>Crear</div>
        </S.Form>
      </S.FormWrapper>
    </S.PanelLayout>
  )
}

export { ClientCreation }
