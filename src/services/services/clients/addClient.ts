import { collection, addDoc, Timestamp } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'

type AddClientRequest = {
  name: string
  email: string
  phone: string
  notes: string
}

const addClient = async (client: AddClientRequest) => {
  return addDoc(collection(firestore, 'clients'), {
    name: client.name || '',
    email: client.email || '',
    notes: client.notes || '',
    phone: client.phone || '',
    created: Timestamp.fromDate(new Date()),
  })
}

export { addClient }
