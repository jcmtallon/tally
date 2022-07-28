import { doc, getDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Client } from '../../types'

const getClient = async (clientId: string): Promise<Client> => {
  const clientRef = doc(firestore, `clients/${clientId}`)

  const response = await getDoc(clientRef)
  const data = response.data()

  if (!data) throw new Error('No client found')

  return {
    clientId,
    name: data.name,
    email: data.email,
    phone: data.phone,
    notes: data.notes,
  }
}

export { getClient }
