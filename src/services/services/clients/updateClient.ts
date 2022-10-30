import { doc, updateDoc, serverTimestamp } from 'firebase/firestore/lite'
import { firestore } from '../../firestoreSetup'

type UpdateClientPayload = {
  name: string
}

const updateClient = async (id: string, payload: UpdateClientPayload) => {
  const clientRef = doc(firestore, 'clients', id)
  return updateDoc(clientRef, {
    name: payload.name,
    updated: serverTimestamp(),
  })
}

export { updateClient }
