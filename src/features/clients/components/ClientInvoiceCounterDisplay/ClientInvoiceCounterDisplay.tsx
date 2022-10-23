import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientInvoiceCounterDisplay.styles'

interface ClientInvoiceCounterDisplayProps extends HTMLAttributes<HTMLDivElement> {
  count: number
}

function ClientInvoiceCounterDisplay(props: ClientInvoiceCounterDisplayProps) {
  const { count, ...otherProps } = props
  return (
    <S.Wrapper {...otherProps}>
      <span>{count}</span>
      <S.Icon />
    </S.Wrapper>
  )
}

const StylableClientInvoiceCounterDisplay = createStylableComponent(S, ClientInvoiceCounterDisplay)

export { StylableClientInvoiceCounterDisplay as ClientInvoiceCounterDisplay }
export type { ClientInvoiceCounterDisplayProps }
