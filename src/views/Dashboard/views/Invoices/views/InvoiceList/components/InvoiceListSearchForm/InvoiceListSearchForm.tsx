import React, { HTMLAttributes } from 'react'
import { InvoiceStatus } from 'services'
import { createStylableComponent } from 'utils'
import { InvoiceListState } from '../InvoiceList'
import * as S from './InvoiceListSearchForm.styles'

type FormValues = InvoiceListState['filters']

interface InvoiceListSearchFormProps extends HTMLAttributes<HTMLDivElement> {
  values: FormValues

  onValuesChange?: (values: FormValues) => void
}

function InvoiceListSearchForm(props: InvoiceListSearchFormProps) {
  const { values, onValuesChange, ...otherProps } = props

  return (
    <S.Container {...otherProps}>
      <S.Field label="Cliente">
        <S.SearchInput
          placeholder="Name"
          value={values.search}
          onChange={e => onValuesChange?.({ ...values, search: e.target.value })}
        />
      </S.Field>
      <S.Field id="status" label="Estado">
        {/* TODO: abstract Select component */}
        <S.StatusSelect
          value={values.status ?? ''}
          options={[
            { value: '', label: '' },
            { value: 'DRAFT', label: 'Pendiente' },
            { value: 'SENT', label: 'Enviado' },
            { value: 'PAID', label: 'Pagado' },
            { value: 'CANCELLED', label: 'Cancelado' },
          ]}
          onChange={e => onValuesChange?.({ ...values, status: e.target.value as InvoiceStatus })}
        />
      </S.Field>
    </S.Container>
  )
}

const StylableInvoiceListSearchForm = createStylableComponent(S, InvoiceListSearchForm)

export { StylableInvoiceListSearchForm as InvoiceListSearchForm }
export type { InvoiceListSearchFormProps }
