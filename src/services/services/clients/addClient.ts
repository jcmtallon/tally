import { collection, addDoc, Timestamp } from 'firebase/firestore/lite'
import { ClientType, CLIENT_TYPE } from 'services/types'
import { firestore } from '../../firestoreSetup'

type AddClientRequest = {
  type: ClientType
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
    type: client.type || CLIENT_TYPE.INDIVIDUAL,
    invoices: 0,
    created: Timestamp.fromDate(new Date()),
  })
}

export { addClient }
