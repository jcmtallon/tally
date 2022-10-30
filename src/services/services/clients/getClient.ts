import { doc, getDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Client } from '../../types'
import { firestoreClientToClient } from './docToClient'
import { FirestoreClient } from './types'

const getClient = async (clientId: string): Promise<Client> => {
  const clientRef = doc(firestore, `clients/${clientId}`)

  const response = await getDoc(clientRef)
  const data = response.data() as FirestoreClient

  if (!data) throw new Error('No client found')

  return firestoreClientToClient(clientId, data)
}

export { getClient }
