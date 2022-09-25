import { ListClientsOptions } from 'services'
import { isNumber } from 'utils'
import { isClientListSortableFiled } from './clientList.types'
import { ClientListSearchParams } from './useClientListSearchParams'

function clientListSearchParamsToApiOptions(params: ClientListSearchParams): ListClientsOptions {
  const { page, limit, dir, sort, search } = params
  const options: ListClientsOptions = {}

  if (page !== null && isNumber(page)) options.page = parseInt(page, 10)

  if (limit !== null && isNumber(limit)) options.limit = parseInt(limit, 10)

  if (sort !== null && isClientListSortableFiled(sort)) options.sortBy = sort

  if (dir === 'desc') options.direction = dir

  options.search = search ?? ''

  return options
}

export { clientListSearchParamsToApiOptions }
