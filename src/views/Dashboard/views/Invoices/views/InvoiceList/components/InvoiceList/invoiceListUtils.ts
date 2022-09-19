import { isInvoiceListSortableFiled, ListInvoicesOptions } from 'services'
import { isNumber } from 'utils'
import { ClientListSearchParams } from './useInvoiceListSearchParams'

function invoiceListSearchParamsToApiOptions(params: ClientListSearchParams): ListInvoicesOptions {
  const { page, limit, dir, sort } = params
  const options: ListInvoicesOptions = {}

  if (page !== null && isNumber(page)) options.page = parseInt(page, 10)
  if (limit !== null && isNumber(limit)) options.limit = parseInt(limit, 10)

  if (sort !== null && isInvoiceListSortableFiled(sort)) options.sortBy = sort
  if (dir === 'desc') options.direction = dir

  return options
}

export { invoiceListSearchParamsToApiOptions }
