import { ListClientsOptions } from 'services'
import { ClientListState, isClientListSortableFiled } from './clientList.types'

function clientListSearchParamsToApiOptions(params: ClientListState): ListClientsOptions {
  const { page, limit, filters, sorting } = params
  const options: ListClientsOptions = {}

  options.page = page
  options.limit = limit

  if (sorting?.orderBy !== undefined && isClientListSortableFiled(sorting.orderBy))
    options.sortBy = sorting.orderBy

  if (sorting?.direction === 'desc') options.direction = sorting.direction

  options.search = filters.search ?? ''

  return options
}

export { clientListSearchParamsToApiOptions }
