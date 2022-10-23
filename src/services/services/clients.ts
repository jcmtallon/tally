import { addClient } from './clients/addClient'
import { listClients } from './clients/listClients'
import { getClient } from './clients/getClient'
import { deleteClients } from './clients/deleteClients'

const clients = {
  add: addClient,
  get: getClient,
  list: listClients,
  deleteMany: deleteClients,
}

export { clients }
