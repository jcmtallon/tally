import { addClient } from './clients/addClient'
import { listClients, ListClientsOptions } from './clients/listClients'
import { getClient } from './clients/getClient'

const clients = {
  add: addClient,
  get: getClient,
  list: listClients,
}

export { clients }
export type { ListClientsOptions }
