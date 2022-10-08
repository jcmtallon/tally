import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore/lite'
import { Client } from '../../types'

function docToClient(doc: QueryDocumentSnapshot<DocumentData>): Client {
  const data = doc.data()

  return {
    clientId: doc.id,
    clientType: 'individual', // TODO
    name: data.name,
    email: data.email,
    phone: data.phone,
    notes: data.notes,
    created: data.created ? data.created.toDate().toISOString() : '',
  }
}

function docsToClients(docs: QuerySnapshot<DocumentData>): Client[] {
  const clients: Client[] = []

  docs.forEach(doc => {
    clients.push(docToClient(doc))
  })

  return clients
}

export { docsToClients, docToClient }
