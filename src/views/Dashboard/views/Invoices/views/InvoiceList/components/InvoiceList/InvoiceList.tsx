import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Invoice, listInvoices } from 'services'
import { useInvoiceListSearchParams } from './useInvoiceListSearchParams'
import * as S from './InvoiceList.styles'
import { useInvoiceListState } from './useInvoiceListState'
import { invoiceListSearchParamsToApiOptions as paramsToApiOpts } from './invoiceListUtils'

interface InvoiceListProps extends HTMLAttributes<HTMLDivElement> {
  onInvoiceCreated?: () => void
  onShowInvoiceDetailsClicked?: (clientId: string) => void
}

function InvoiceList(props: InvoiceListProps) {
  const { onInvoiceCreated, onShowInvoiceDetailsClicked, ...otherProps } = props

  const { searchParamsQuery, setPageParam, setLimitParam, setSortingParams } = useInvoiceListSearchParams()

  const [{ page, limit, orderBy, direction }, dispatch] = useInvoiceListState()
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [totalInvoices, setTotalInvoices] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'changeSearchParams', payload: searchParamsQuery })
      const response = await listInvoices(paramsToApiOpts(searchParamsQuery))
      setInvoices(response.data)
      setTotalInvoices(response.total)
    }

    fetchData()
  }, [searchParamsQuery, dispatch])

  const pageChangeHandler = (value: number) => {
    setPageParam(value)
  }

  const rowsPerPageChangeHandler = (value: number) => {
    setLimitParam(value)
  }

  const sortChangeHandler = (orderBy: string | undefined, direction: 'asc' | 'desc' | undefined) => {
    setSortingParams(orderBy, direction)
  }

  return (
    <S.Container {...otherProps}>
      <S.Table
        invoices={invoices}
        onRowClicked={invoice => onShowInvoiceDetailsClicked?.(invoice)}
        onSortChanged={sortChangeHandler}
        orderBy={orderBy}
        order={direction}
      />
      <S.Pagination
        page={page}
        rowCount={totalInvoices}
        rowsPerPage={limit}
        onPageChange={(_, value) => pageChangeHandler(value)}
        onRowsPerPageChange={e => rowsPerPageChangeHandler(+e.target.value)}
      />
    </S.Container>
  )
}

export { InvoiceList }
export type { InvoiceListProps }
