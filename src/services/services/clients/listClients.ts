import { collection, getDocs } from 'firebase/firestore/lite'
import { Client } from '../../types'
import { firestore } from '../../firestoreSetup'

interface ListClientsOptions {
  name?: string
}

const listClients = async (options: ListClientsOptions): Promise<Client[]> => {
  const { name } = options

  const clientsRef = collection(firestore, `clients`)
  const docs = await getDocs(clientsRef)

  const clients: Client[] = []

  docs.forEach(doc => {
    const data = doc.data()
    clients.push({
      clientId: doc.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      notes: data.notes,
    })
  })

  return clients
}

export { listClients }
