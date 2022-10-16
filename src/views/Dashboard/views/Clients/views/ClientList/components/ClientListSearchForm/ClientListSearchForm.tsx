import React, { HTMLAttributes } from 'react'
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
        <S.DebounceSearchInput
          placeholder="Busca por nombre, teléfono o correo electrónico"
          value={values.search}
          onChange={val => onValuesChange?.({ ...values, search: val })}
          endAdornment={
            values.search !== '' ? (
              <S.IconButton onClick={() => onValuesChange?.({ ...values, search: '' })}>
                <S.XMarkIcon />
              </S.IconButton>
            ) : undefined
          }
        />
      </S.Field>
    </S.Container>
  )
}

const StylableClientListSearchForm = createStylableComponent(S, ClientListSearchForm)

export { StylableClientListSearchForm as ClientListSearchForm }
export type { ClientListSearchFormProps }
