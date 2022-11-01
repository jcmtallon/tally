import { doc, updateDoc, serverTimestamp } from 'firebase/firestore/lite'
import { Address, ClientType, CLIENT_TYPE } from 'services/types'
import { firestore } from '../../firestoreSetup'
import { FirestoreClient } from '../types/firestoreClient'

type UpdateClientPayload = {
  type: ClientType
  name: string
  taxId: string
  email: string
  phone: string
  address: Address
  notes: string
}

const updateClient = async (id: string, payload: UpdateClientPayload) => {
  const { type, name, taxId, email, phone, address, notes } = payload

  const clientRef = doc(firestore, 'clients', id)

  const payloadData: Partial<FirestoreClient> = {
    name: name || '',
    tax_id: taxId || '',
    email: email || '',
    notes: notes || '',
    phone: phone || '',
    type: type || CLIENT_TYPE.INDIVIDUAL,
    updated: serverTimestamp(),
    address: {
      city: address.city,
      postal_code: address.postalCode,
      street: address.street,
    },
  }

  return updateDoc(clientRef, payloadData)
}

export { updateClient }
