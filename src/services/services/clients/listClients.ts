import { collection, getDocs, query } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { mockClients } from './mockClients'
import { Client } from '../../types'
import { docsToClients } from './docToClient'

const USE_CLIENT_MOCK_DATA = false

async function listClients(): Promise<Client[]> {
  if (USE_CLIENT_MOCK_DATA) return mockClients as Client[]

  const clientsRef = collection(firestore, `clients`)
  const q = query(clientsRef)
  const docs = await getDocs(q)
  const data = docsToClients(docs)

  return data || []
}

export { listClients }
