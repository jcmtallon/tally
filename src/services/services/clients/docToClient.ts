import { Timestamp, DocumentData, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore/lite'
import { Client, isClientType, CLIENT_TYPE } from '../../types'
import { FirestoreClient } from '../types/firestoreClient'

function firestoreClientToClient(id: string, data: FirestoreClient): Client {
  const { type, name, tax_id: propsTaxId, email, phone, notes, invoices, created, updated, address } = data
  return {
    clientId: id,
    clientType: isClientType(type) ? type : CLIENT_TYPE.INDIVIDUAL,
    name,
    taxId: propsTaxId,
    email,
    phone,
    notes,
    invoicesCount: invoices ?? 0,
    created: created ? (created as Timestamp).toDate().toISOString() : '',
    updated: updated ? (updated as Timestamp).toDate().toISOString() : '',
    address: {
      city: address?.city || '',
      postalCode: address?.postal_code || '',
      street: address?.street || '',
    },
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
