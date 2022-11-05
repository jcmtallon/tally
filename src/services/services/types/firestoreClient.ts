import { FieldValue } from 'firebase/firestore/lite'
import { FirestoreAddress } from './firestoreAddress'

interface FirestoreClient {
  name: string
  tax_id: string
  email: string
  notes: string
  phone: string
  type: string
  invoices: number
  created: FieldValue // Timestamp
  updated?: FieldValue // Timestamp
  address: FirestoreAddress
}

export type { FirestoreClient }
