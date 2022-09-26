import { isInvoiceStatus, ListInvoicesOptions } from 'services'
import { InvoiceListState, isInvoiceListSortableFiled } from './InvoiceList.types'

function invoiceListSearchParamsToApiOptions(params: InvoiceListState): ListInvoicesOptions {
  const { page, limit, filters, sorting } = params
  const options: ListInvoicesOptions = {}

  options.page = page
  options.limit = limit

  if (sorting?.orderBy !== undefined && isInvoiceListSortableFiled(sorting.orderBy))
    options.sortBy = sorting.orderBy

  if (sorting?.direction === 'desc') options.direction = sorting.direction

  if (filters.status !== undefined && isInvoiceStatus(filters.status)) options.status = filters.status

  options.search = filters.search ?? ''

  return options
}

export { invoiceListSearchParamsToApiOptions }
