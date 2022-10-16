import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientListTopRow.styles'

interface ClientListTopRowProps extends HTMLAttributes<HTMLDivElement> {
  onCreateClientButtonClicked?: () => void
}

function ClientListTopRow(props: ClientListTopRowProps) {
  const { onCreateClientButtonClicked, ...otherProps } = props
  return (
    <S.Wrapper {...otherProps}>
      <S.Header>
        <S.IconBox icon={<S.ClientIcon />} />
        <span>Clientes</span>
      </S.Header>
      <S.CreateClientButton startIcon={<S.PlusIcon />} onClick={onCreateClientButtonClicked}>
        Crear Cliente
      </S.CreateClientButton>
    </S.Wrapper>
  )
}

const StylableClientListTopRow = createStylableComponent(S, ClientListTopRow)

export { StylableClientListTopRow as ClientListTopRow }
export type { ClientListTopRowProps }
