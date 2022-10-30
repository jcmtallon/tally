import { FieldValue } from 'firebase/firestore/lite'

interface FirestoreClient {
  name: string
  tax_id: string
  email: string
  notes: string
  phone: string
  type: string
  invoices: number
  created: FieldValue // Timestamp
  updated: FieldValue // Timestamp
}

export type { FirestoreClient }
