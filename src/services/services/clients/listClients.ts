import { collection, getDocs, query } from 'firebase/firestore/lite'
import { paginateData, sortData } from 'services/utils'
import { firestore } from '../../firestoreSetup'
import { mockClients } from './mockClients'
import { Client } from '../../types'
import { docsToClients } from './docToClient'

// TODO: refresh method for refreshing the list? Or different method to update only updated element...
// but when a change could apply to multiple invoices, customers... better to refetch everything.

const USE_CLIENT_MOCK_DATA = false

let data: Client[] | undefined

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
  return data.filter(x => regexp.test(x.name) || regexp.test(x.email) || regexp.test(x.phone))
}

async function getClientData(): Promise<Client[]> {
  if (USE_CLIENT_MOCK_DATA) return mockClients as Client[]

  // if (!data) {
  const clientsRef = collection(firestore, `clients`)
  const q = query(clientsRef)
  const docs = await getDocs(q)
  data = docsToClients(docs)
  // }

  // TODO: add proper error handling

  return data || []
}

async function listClients(opts: ListClientsOptions): Promise<ListClientsResponse> {
  const { limit = 10, page = 0, direction = 'asc', sortBy = undefined, search = '' } = opts

  const clients = await getClientData()
  const filteredByTextData = filterBySearchText(clients, search)
  const sortedData = sortBy ? sortData(filteredByTextData, direction, sortBy) : filteredByTextData
  const slicedData = paginateData(sortedData, page, limit)

  return {
    total: filteredByTextData.length,
    data: slicedData,
  }
}

export { listClients }
export type { ListClientsOptions }
