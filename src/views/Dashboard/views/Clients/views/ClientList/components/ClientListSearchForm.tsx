import React, { useState } from 'react'
import * as S from './ClientListSearchForm.styles'

interface ClientListSearchFormState {
  name: string
}

interface ClientListSearchFormProps {
  className?: string

  // TODO: remove in favour of url param search
  onSearchClick?: (state: ClientListSearchFormState) => void
}

const formInitialState = {
  name: '',
}

function ClientListSearchForm(props: ClientListSearchFormProps) {
  const { onSearchClick, className } = props

  // TODO: Reflect params in url.
  const [formState, setFormState] = useState<ClientListSearchFormState>(formInitialState)

  const search = () => {
    // TODO: reflect state into url
    onSearchClick?.(formState)
  }

  return (
    <S.FilterRow className={className}>
      <S.Filters>
        <input
          placeholder="Name"
          value={formState.name}
          onChange={e => setFormState({ ...formState, name: e.target.value })}
        />
      </S.Filters>
      <S.ActionButtonWrapper>
        <S.Button onClick={search}>Buscar</S.Button>
      </S.ActionButtonWrapper>
    </S.FilterRow>
  )
}

export { ClientListSearchForm }
export type { ClientListSearchFormProps, ClientListSearchFormState }
