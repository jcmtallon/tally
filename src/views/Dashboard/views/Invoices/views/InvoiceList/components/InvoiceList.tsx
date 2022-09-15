import { DashboardLayout } from 'features/dashboard'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Invoice, listInvoices } from 'services'
import * as S from './InvoiceList.styles'

interface InvoiceListProps extends HTMLAttributes<HTMLDivElement> {
  onInvoiceCreated?: () => void
  onShowInvoiceDetailsClicked?: (clientId: string) => void
}

function InvoiceList(props: InvoiceListProps) {
  const { onInvoiceCreated, onShowInvoiceDetailsClicked, ...otherProps } = props

  const [invoices, setInvoices] = useState<Invoice[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await listInvoices({})
      setInvoices(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <DashboardLayout>
        <S.Container {...otherProps}>
          <S.TopRow>
            <S.Header>Search Invoice</S.Header>
          </S.TopRow>
          <S.TableWrapper>
            <S.Table invoices={invoices} onRowClicked={invoice => onShowInvoiceDetailsClicked?.(invoice)} />
          </S.TableWrapper>
        </S.Container>
      </DashboardLayout>
    </>
  )
}

export { InvoiceList }
