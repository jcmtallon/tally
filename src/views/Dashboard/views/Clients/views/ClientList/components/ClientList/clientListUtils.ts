import { TableSorting } from 'components'
import { Client } from 'services'
import { paginateData, sortData } from 'utils'
import { isClientListSortableFiled } from './clientList.types'

interface FilterClientDataParams {
  search: string
}

function filterClientData(data: Client[], params: FilterClientDataParams) {
  const { search = '' } = params

  if (search === '') return data

  const regexp = new RegExp(search, 'i')
  return data.filter(x => regexp.test(x.name) || regexp.test(x.email) || regexp.test(x.phone))
}

interface GetCurrentPageClientsParams {
  limit?: number
  page?: number
  sorting: TableSorting | undefined
  direction?: 'asc' | 'desc'
  orderBy?: string
}

function getCurrentPageClients(data: Client[], params: GetCurrentPageClientsParams) {
  const { limit = 10, page = 0, sorting } = params

  const sortBy = sorting?.orderBy && isClientListSortableFiled(sorting.orderBy) ? sorting.orderBy : undefined

  const sortedData = sortBy ? sortData(data, sorting?.direction ?? 'asc', sortBy) : data
  return paginateData(sortedData, page, limit)
}

export { filterClientData, getCurrentPageClients }
