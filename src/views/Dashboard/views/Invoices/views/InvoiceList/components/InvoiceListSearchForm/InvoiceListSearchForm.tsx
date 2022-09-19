import React, { HTMLAttributes } from 'react'
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
    </S.Container>
  )
}

const StylableInvoiceListSearchForm = createStylableComponent(S, InvoiceListSearchForm)

export { StylableInvoiceListSearchForm as InvoiceListSearchForm }
export type { InvoiceListSearchFormProps }
