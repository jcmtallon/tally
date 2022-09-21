import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './InvoiceListActions.styles'

interface InvoiceListActionsProps extends HTMLAttributes<HTMLDivElement> {
  selected: string[]

  onPDFGenerated?: () => void
  onInvoiceDeleted?: () => void
  onResetSelection?: () => void
}

function InvoiceListActions(props: InvoiceListActionsProps) {
  const { selected, onPDFGenerated, onInvoiceDeleted, ...otherProps } = props

  // If deleted, back in list: reset selection = refetch.
  // If not deleted: show toast error. No refetch, no reset selection

  // If generated pdf. Download files.
  // If not generated. Show toast error.

  return (
    <S.Container {...otherProps}>
      <S.Metrics>
        <span>Cargos 100€</span>
        <span>Ganancias 100€</span>
      </S.Metrics>
      <S.Actions>
        {selected.length > 0 && <span>{`${selected.length} seleccionados`}</span>}
        <S.Button>Generate PDF</S.Button>
        <S.Button>Borrar</S.Button>
      </S.Actions>
    </S.Container>
  )
}

const StylableInvoiceListActions = createStylableComponent(S, InvoiceListActions)

export { StylableInvoiceListActions as InvoiceListActions }
export type { InvoiceListActionsProps }
