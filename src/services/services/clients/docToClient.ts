import { Timestamp, DocumentData, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore/lite'
import { Client, isClientType, CLIENT_TYPE } from '../../types'
import { FirestoreClient } from './types'

function firestoreClientToClient(id: string, data: FirestoreClient): Client {
  return {
    clientId: id,
    clientType: isClientType(data.type) ? data.type : CLIENT_TYPE.INDIVIDUAL,
    name: data.name,
    taxId: data.tax_id,
    email: data.email,
    phone: data.phone,
    notes: data.notes,
    invoicesCount: data.invoices ?? 0,
    created: data.created ? (data.created as Timestamp).toDate().toISOString() : '',
    updated: data.updated ? (data.updated as Timestamp).toDate().toISOString() : '',
  }
}

function docToClient(doc: QueryDocumentSnapshot<DocumentData>): Client {
  const data = doc.data() as FirestoreClient
  return firestoreClientToClient(doc.id, data)
}

function docsToClients(docs: QuerySnapshot<DocumentData>): Client[] {
  const clients: Client[] = []

  docs.forEach(doc => {
    clients.push(docToClient(doc))
  })

  return clients
}

export { docsToClients, docToClient, firestoreClientToClient }
