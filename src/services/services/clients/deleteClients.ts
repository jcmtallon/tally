import { doc, writeBatch } from 'firebase/firestore/lite'
import { forEach } from 'lodash'
import { firestore } from '../../firestoreSetup'

const deleteClients = async (clientIds: string[]): Promise<void> => {
  const batch = writeBatch(firestore)

  forEach(clientIds, id => {
    const clientRef = doc(firestore, `clients/${id}`)
    batch.delete(clientRef)
  })

  await batch.commit()
}

export { deleteClients }
