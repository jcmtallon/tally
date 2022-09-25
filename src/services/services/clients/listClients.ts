import { paginateData, sortData } from 'services/utils'
import { mockClients } from './mockClients'
import { Client } from '../../types'

// TODO: cache data.
// TODO: refresh method for refreshing the list? Or different method to update only updated element...
// but when a change could apply to multiple invoices, customers... better to refetch everything.

// TODO: Variable for switching to MOCK_DATA

interface ListClientsOptions {
  limit?: number
  page?: number
  direction?: 'asc' | 'desc'
  sortBy?: string
  search?: string
}

interface ListClientsResponse {
  data: Client[]
  total: number
}

function filterBySearchText(data: Client[], search: string): Client[] {
  if (search === '') return data

  const regexp = new RegExp(search, 'i')
  return data.filter(x => regexp.test(x.name))
}

async function listClients(opts: ListClientsOptions): Promise<ListClientsResponse> {
  const { limit = 10, page = 0, direction = 'asc', sortBy = undefined, search = '' } = opts
  // const clientsRef = collection(firestore, `clients`)
  // const q = query(clientsRef)
  // const docs = await getDocs(q)

  const data = mockClients as Client[]
  const filteredByTextData = filterBySearchText(data, search)
  const sortedData = sortBy ? sortData(filteredByTextData, direction, sortBy) : filteredByTextData
  const slicedData = paginateData(sortedData, page, limit)

  return {
    total: data.length,
    data: slicedData,
  }
}

export { listClients }
export type { ListClientsOptions }
