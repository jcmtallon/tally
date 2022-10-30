import { doc, updateDoc, serverTimestamp } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'
import { FirestoreClient } from './types'

type UpdateClientPayload = {
  name: string
}

const updateClient = async (id: string, payload: UpdateClientPayload) => {
  const clientRef = doc(firestore, 'clients', id)

  const payloadData: Partial<FirestoreClient> = {
    name: payload.name,
    updated: serverTimestamp(),
  }

  return updateDoc(clientRef, payloadData)
}

export { updateClient }
