import { doc, getDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Client, CLIENT_TYPE } from '../../types'

const getClient = async (clientId: string): Promise<Client> => {
  const clientRef = doc(firestore, `clients/${clientId}`)

  const response = await getDoc(clientRef)
  const data = response.data()

  if (!data) throw new Error('No client found')

  return {
    clientId,
    clientType: CLIENT_TYPE.INDIVIDUAL,
    name: data.name,
    taxId: data.taxId,
    email: data.email,
    phone: data.phone,
    notes: data.notes,
    invoicesCount: 0,
    created: '',
  }
}

export { getClient }
