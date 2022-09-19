import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './InvoiceListPage.styles'

interface InvoiceListPageProps extends HTMLAttributes<HTMLDivElement> {
  onCreateInvoiceButtonClicked?: () => void
}

function InvoiceListPage(props: InvoiceListPageProps) {
  const { onCreateInvoiceButtonClicked, ...otherProps } = props
  return (
    <DashboardLayout>
      <S.Container {...otherProps}>
        <S.TopRow>
          <S.Header>Facturas</S.Header>
          <S.CreateInvoiceButton onClick={onCreateInvoiceButtonClicked}>Crear Factura</S.CreateInvoiceButton>
        </S.TopRow>
        <S.InvoiceList />
      </S.Container>
    </DashboardLayout>
  )
}

const StylableInvoiceListPage = createStylableComponent(S, InvoiceListPage)

export { StylableInvoiceListPage as InvoiceListPage }
export type { InvoiceListPageProps }
