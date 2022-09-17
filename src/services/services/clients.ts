import { addClient } from './clients/addClient'
import { list } from './clients/listClients'
import { getClient } from './clients/getClient'

const clients = {
  add: addClient,
  get: getClient,
  list,
}

export { clients }
