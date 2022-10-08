import { addClient } from './clients/addClient'
import { listClients } from './clients/listClients'
import { getClient } from './clients/getClient'

const clients = {
  add: addClient,
  get: getClient,
  list: listClients,
}

export { clients }
