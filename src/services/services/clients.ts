import { addClient } from './clients/addClient'
import { updateClient } from './clients/updateClient'
import { listClients } from './clients/listClients'
import { getClient } from './clients/getClient'
import { deleteClients } from './clients/deleteClients'

const clients = {
  add: addClient,
  update: updateClient,
  get: getClient,
  list: listClients,
  deleteMany: deleteClients,
}

export { clients }
