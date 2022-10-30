import React, { HTMLAttributes, ReactNode } from 'react'
import { ClientType, CLIENT_TYPE } from 'services'
import { createStylableComponent } from 'utils'
import * as S from './ClientTypeDisplay.styles'

interface ClientTypeDisplayProps extends HTMLAttributes<HTMLDivElement> {
  clientName: string
  clientType?: ClientType
}

function ClientTypeDisplay(props: ClientTypeDisplayProps) {
  const { clientName, clientType = CLIENT_TYPE.INDIVIDUAL, ...otherProps } = props

  const icon: Record<ClientType, ReactNode> = {
    INDIVIDUAL: <S.Person />,
    COMPANY: <S.Wallet />,
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
