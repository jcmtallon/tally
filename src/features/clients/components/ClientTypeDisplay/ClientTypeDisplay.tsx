import React, { HTMLAttributes, ReactNode } from 'react'
import { Client } from 'services'
import { createStylableComponent } from 'utils'
import * as S from './ClientTypeDisplay.styles'

interface ClientTypeDisplayProps extends HTMLAttributes<HTMLDivElement> {
  clientName: string
  clientType?: Client['clientType']
}

function ClientTypeDisplay(props: ClientTypeDisplayProps) {
  const { clientName, clientType = 'individual', ...otherProps } = props

  const icon: Record<Client['clientType'], ReactNode> = {
    individual: <S.Person />,
    company: <S.Suitcase />,
  }

  return (
    <S.Wrapper {...otherProps}>
      <S.Chip clientType={clientType} startIcon={icon[clientType]} />
      <span>{clientName}</span>
    </S.Wrapper>
  )
}

const StylableClientTypeDisplay = createStylableComponent(S, ClientTypeDisplay)

export { StylableClientTypeDisplay as ClientTypeDisplay }
export type { ClientTypeDisplayProps }
