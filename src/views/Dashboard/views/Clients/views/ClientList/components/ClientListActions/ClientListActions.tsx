import React, { HTMLAttributes, useCallback } from 'react'
import { createStylableComponent } from 'utils'
import { clients as clientsApi } from 'services'
import * as S from './ClientListActions.styles'

interface ClientListActionsProps extends HTMLAttributes<HTMLDivElement> {
  selected: string[]

  onPDFGenerated?: () => void
  onClientDeleted?: () => void
  onResetSelection?: () => void
}

function ClientListActions(props: ClientListActionsProps) {
  const { selected, onPDFGenerated, onClientDeleted, onResetSelection, ...otherProps } = props

  // If deleted, back in list: reset selection = refetch.

  const handleDelete = useCallback(async () => {
    try {
      await clientsApi.deleteMany(selected)
      onClientDeleted?.()
    } catch (error) {
      // If not deleted: show toast error. No refetch, no reset selection
    }
  }, [onClientDeleted, selected])

  return (
    <S.Container {...otherProps}>
      <S.Actions>
        {selected.length > 0 && (
          <S.SelectedLabelWrapper>
            <S.CloseIcon tabIndex={0} role="button" onClick={onResetSelection} />
            <span>{`${selected.length} seleccionados`}</span>
          </S.SelectedLabelWrapper>
        )}
        {selected.length > 0 && <S.Button onClick={handleDelete}>Borrar</S.Button>}
      </S.Actions>
    </S.Container>
  )
}

const StylableClientListActions = createStylableComponent(S, ClientListActions)

export { StylableClientListActions as ClientListActions }
export type { ClientListActionsProps }
