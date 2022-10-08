import { Input } from 'components'
import React, { HTMLAttributes, useCallback } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientListSearchForm.styles'

// type FormValues = InvoiceListState['filters']
type FormValues = {
  search: string
}

interface ClientListSearchFormProps extends HTMLAttributes<HTMLDivElement> {
  values: FormValues

  onValuesChange?: (values: FormValues) => void
}

function ClientListSearchForm(props: ClientListSearchFormProps) {
  const { values, onValuesChange, ...otherProps } = props

  return (
    <S.Container {...otherProps}>
      <S.Field label="Filtrar">
        {/* <Input
          placeholder="Busca por nombre, teléfono o correo electrónico"
          value={values.search}
          onChange={e => onValuesChange?.({ ...values, search: e.target.value })}
        /> */}
        <S.DebounceSearchInput
          placeholder="Busca por nombre, teléfono o correo electrónico"
          value={values.search}
          onChange={val => onValuesChange?.({ ...values, search: val })}
        />
      </S.Field>
      {values.search !== '' && (
        // TODO: Display erase button inside search field.
        <S.Button onClick={() => onValuesChange?.({ ...values, search: '' })}>x</S.Button>
      )}
    </S.Container>
  )
}

const StylableClientListSearchForm = createStylableComponent(S, ClientListSearchForm)

export { StylableClientListSearchForm as ClientListSearchForm }
export type { ClientListSearchFormProps }
