import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Invoice, listInvoices } from 'services'
import { useInvoiceListSearchParams } from './useInvoiceListSearchParams'
import * as S from './InvoiceList.styles'
import { useInvoiceListState } from './useInvoiceListState'
import { invoiceListSearchParamsToApiOptions as paramsToApiOpts } from './invoiceListUtils'
import { InvoiceListState } from './InvoiceList.types'

interface InvoiceListProps extends HTMLAttributes<HTMLDivElement> {
  onShowInvoiceDetailsClicked?: (invoiceId: string) => void
}

function InvoiceList(props: InvoiceListProps) {
  const { onShowInvoiceDetailsClicked, ...otherProps } = props

  const { invoiceListSearchParams, setPageParam, setLimitParam, setSortingParams, setFilterParam } =
    useInvoiceListSearchParams()

  const [{ page, limit, sorting, filters, selected }, dispatch] = useInvoiceListState()
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [totalInvoices, setTotalInvoices] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await listInvoices(paramsToApiOpts(invoiceListSearchParams))
      setInvoices(response.data)
      setTotalInvoices(response.total)
    }

    dispatch({ type: 'changeSearchParams', payload: invoiceListSearchParams })
    fetchData()
  }, [invoiceListSearchParams, dispatch])

  const searchFormChangeHandler = (filters: InvoiceListState['filters']) => {
    setFilterParam(filters)
  }

  const pageChangeHandler = (value: InvoiceListState['page']) => {
    setPageParam(value)
  }

  const rowsPerPageChangeHandler = (value: InvoiceListState['limit']) => {
    setLimitParam(value)
  }

  const sortChangeHandler = (sorting: InvoiceListState['sorting'] | undefined) => {
    setSortingParams(sorting)
  }

  const selectedChangeHandler = (selected: string[]) => {
    dispatch({ type: 'changeSelected', payload: { selected } })
  }

  return (
    <S.Container {...otherProps}>
      <S.SearchForm id="invoicesSearchForm" values={filters} onValuesChange={searchFormChangeHandler} />
      <S.Actions id="invoicesActions" selected={selected} />
      <S.Table
        id="invoicesTable"
        invoices={invoices}
        sorting={sorting}
        selected={selected}
        onRowClicked={invoice => onShowInvoiceDetailsClicked?.(invoice)}
        onSortChanged={sortChangeHandler}
        onSelectedChanged={selectedChangeHandler}
      />
      <S.TotalCounter id="invoicesTotal">{`${totalInvoices} resultados`}</S.TotalCounter>
      <S.Pagination
        id="invoicesPagination"
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
