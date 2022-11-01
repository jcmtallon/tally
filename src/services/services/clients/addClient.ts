import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite'
import { Address, ClientType, CLIENT_TYPE } from '../../types'
import { firestore } from '../../firestoreSetup'
import { FirestoreClient } from '../types/firestoreClient'

type AddClientRequest = {
  type: ClientType
  name: string
  taxId: string
  email: string
  phone: string
  address: Address
  notes: string
}

const addClient = async (client: AddClientRequest) => {
  const { name, taxId, email, notes, phone, type, address } = client

  const payload: FirestoreClient = {
    name: name || '',
    tax_id: taxId || '',
    email: email || '',
    notes: notes || '',
    phone: phone || '',
    type: type || CLIENT_TYPE.INDIVIDUAL,
    invoices: 0,
    created: serverTimestamp(),
    updated: serverTimestamp(),
    address: {
      city: address.city,
      postal_code: address.postalCode,
      street: address.street,
    },
  }

  return addDoc(collection(firestore, 'clients'), payload)
}

export { addClient }
