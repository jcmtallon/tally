import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite'
import { ClientType, CLIENT_TYPE } from '../../types'
import { firestore } from '../../firestoreSetup'
import { FirestoreClient } from './types'

type AddClientRequest = {
  type: ClientType
  name: string
  taxId: string
  email: string
  phone: string
  notes: string
}

const addClient = async (client: AddClientRequest) => {
  const payload: FirestoreClient = {
    name: client.name || '',
    tax_id: client.taxId || '',
    email: client.email || '',
    notes: client.notes || '',
    phone: client.phone || '',
    type: client.type || CLIENT_TYPE.INDIVIDUAL,
    invoices: 0,
    created: serverTimestamp(),
    updated: serverTimestamp(),
  }

  return addDoc(collection(firestore, 'clients'), payload)
}

export { addClient }
