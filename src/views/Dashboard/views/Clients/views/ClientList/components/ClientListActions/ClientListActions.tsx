import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientListActions.styles'

interface ClientListActionsProps extends HTMLAttributes<HTMLDivElement> {
  selected: string[]

  onPDFGenerated?: () => void
  onClientDeleted?: () => void
  onResetSelection?: () => void
}

function ClientListActions(props: ClientListActionsProps) {
  const { selected, onPDFGenerated, onClientDeleted, ...otherProps } = props

  // If deleted, back in list: reset selection = refetch.
  // If not deleted: show toast error. No refetch, no reset selection

  // If generated pdf. Download files.
  // If not generated. Show toast error.

  return (
    <S.Container {...otherProps}>
      <S.Actions>
        {selected.length > 0 && <span>{`${selected.length} seleccionados`}</span>}
        <S.Button>Borrar</S.Button>
      </S.Actions>
    </S.Container>
  )
}

const StylableClientListActions = createStylableComponent(S, ClientListActions)

export { StylableClientListActions as ClientListActions }
export type { ClientListActionsProps }
