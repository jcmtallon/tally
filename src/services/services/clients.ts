import { addClient } from './clients/addClient'
import { list, ListClientsQueryOptions } from './clients/listClients'
import { getClient } from './clients/getClient'

const clients = {
  add: addClient,
  get: getClient,
  list,
}

export { clients }
export type { ListClientsQueryOptions }
