import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientListTotalCount.styles'

interface ClientListTotalCountProps extends HTMLAttributes<HTMLDivElement> {
  count: number
}

function ClientListTotalCount(props: ClientListTotalCountProps) {
  const { count, ...otherProps } = props
  return (
    <S.Wrapper {...otherProps}>
      <S.Counter>{count}</S.Counter>
      <span>{count === 1 ? 'resultado' : 'resultados'}</span>
    </S.Wrapper>
  )
}

const StylableClientListTotalCount = createStylableComponent(S, ClientListTotalCount)

export { StylableClientListTotalCount as ClientListTotalCount }
export type { ClientListTotalCountProps }
