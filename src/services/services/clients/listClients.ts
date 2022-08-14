import { collection, getDocs, WhereFilterOp, where, query } from 'firebase/firestore/lite'
import { Client } from '../../types'
import { firestore } from '../../firestoreSetup'

interface ListClientsOptions {
  name?: string
}

const listClients = async (options: ListClientsOptions): Promise<Client[]> => {
  const { name } = options

  const filters: [string, WhereFilterOp, string][] = []

  if (name) filters.push(['name', '==', name])

  const clientsRef = collection(firestore, `clients`)
  const whereArray = filters.map(f => where(f[0], f[1], f[2]))
  const q = query(clientsRef, ...whereArray)
  const docs = await getDocs(q)

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
