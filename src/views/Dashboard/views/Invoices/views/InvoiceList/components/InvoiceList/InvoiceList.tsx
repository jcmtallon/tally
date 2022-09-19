import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Invoice, listInvoices } from 'services'
import { useInvoiceListSearchParams } from './useInvoiceListSearchParams'
import * as S from './InvoiceList.styles'
import { useInvoiceListState } from './useInvoiceListState'
import { invoiceListSearchParamsToApiOptions as paramsToApiOpts } from './invoiceListUtils'
import { InvoiceListState } from './InvoiceList.types'

interface InvoiceListProps extends HTMLAttributes<HTMLDivElement> {
  onShowInvoiceDetailsClicked?: (clientId: string) => void
}

function InvoiceList(props: InvoiceListProps) {
  const { onShowInvoiceDetailsClicked, ...otherProps } = props

  const { searchParamsQuery, setPageParam, setLimitParam, setSortingParams, setFilterParam } =
    useInvoiceListSearchParams()

  const [{ page, limit, orderBy, direction, filters }, dispatch] = useInvoiceListState()
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

  const searchFormChangeHandler = (filters: InvoiceListState['filters']) => {
    setFilterParam(filters)
  }

  const pageChangeHandler = (value: InvoiceListState['page']) => {
    setPageParam(value)
  }

  const rowsPerPageChangeHandler = (value: InvoiceListState['limit']) => {
    setLimitParam(value)
  }

  const sortChangeHandler = (
    orderBy: InvoiceListState['orderBy'],
    direction: InvoiceListState['direction'],
  ) => {
    setSortingParams(orderBy, direction)
  }

  return (
    <S.Container {...otherProps}>
      <S.SearchForm values={filters} onValuesChange={searchFormChangeHandler} />
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
