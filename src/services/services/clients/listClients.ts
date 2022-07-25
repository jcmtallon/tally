import { collection, getDocs } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'

interface ListClientsOptions {
  name?: string
}

const listClients = async (options: ListClientsOptions): Promise<any> => {
  const { name } = options

  const clientsRef = collection(firestore, `clients`)
  const docs = await getDocs(clientsRef)

  const clients: any[] = []

  docs.forEach(doc => {
    const data = doc.data()
    clients.push({
      clientId: doc.id,
      // name: data.name,
    })
  })

  return clients
}

export { listClients }
