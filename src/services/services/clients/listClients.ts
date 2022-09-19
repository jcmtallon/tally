import { collection, getDocs, query } from 'firebase/firestore/lite'
import { Client } from '../../types'
import { firestore } from '../../firestoreSetup'
import { docsToClients } from './docToClient'

async function listClients(): Promise<Client[]> {
  const clientsRef = collection(firestore, `clients`)
  const q = query(clientsRef)
  const docs = await getDocs(q)
  return docsToClients(docs)
}

export { listClients }

// // Temporary mock data
// const mockData: Client[] = [
//   { clientId: '1', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '2', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '3', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '4', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '5', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '6', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '7', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '8', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '9', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'notes' },
//   { clientId: '10', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '11', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '12', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '13', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '14', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '15', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '16', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '17', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '18', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '19', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '20', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '21', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '22', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '23', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '24', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '25', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '26', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
//   { clientId: '27', clientType: 'individual', name: 'name', email: 'email', phone: 'phone', notes: 'note' },
// ]
