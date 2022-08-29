import { collection, addDoc } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { Client } from '../../types'

// TODO: complete this method.

const addClient = async (client: Partial<Client>) => {
  return addDoc(collection(firestore, 'clients'), {
    name: client.name || '',
    email: client.email || '',
    notes: client.notes || '',
    phone: client.phone || '',
  })
}

export { addClient }
