import { ListClientsQueryOptions } from 'services'
import { ClientListSearchParams } from '../hooks/useClientListSearchParams'

function searchParamsQueryToClientListOptions(query: ClientListSearchParams): ListClientsQueryOptions {
  const options: ListClientsQueryOptions = {}

  if (query.direction === 'desc') options.desc = true

  if (query.limit !== null && query.limit !== '' && !Number.isNaN(Number(query.limit)))
    options.pageSize = parseInt(query.limit, 10)

  // TODO: make sure it is a valid sort field
  if (query.sort !== null) options.sortBy = query.sort

  if (query.name) options.name = query.name

  return options
}

export { searchParamsQueryToClientListOptions }
