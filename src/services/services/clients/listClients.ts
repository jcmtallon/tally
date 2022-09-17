import {
  collection,
  getDocs,
  WhereFilterOp,
  where,
  query,
  orderBy,
  limit as LimitFn,
  startAfter,
  startAt,
  QueryDocumentSnapshot,
  DocumentData,
  QuerySnapshot,
  endBefore,
  limitToLast,
  QueryConstraint,
} from 'firebase/firestore/lite'
import { Client } from '../../types'
import { firestore } from '../../firestoreSetup'
import { docsToClients } from './docToClient'

// Constants

const clientsRef = collection(firestore, `clients`)
const defaultLimit = 10

// Query caching

let firstSnapshot: QueryDocumentSnapshot<DocumentData> | undefined
let lastSnapshot: QueryDocumentSnapshot<DocumentData> | undefined

let whereConstraints: QueryConstraint[] = []
let orderConstraints: QueryConstraint[] = []
let limit: number = defaultLimit

function cacheSnapshots(docs: QuerySnapshot<DocumentData>) {
  firstSnapshot = docs.docs[0] || undefined
  lastSnapshot = docs.docs[docs.docs.length - 1] || undefined
}

async function executeQuery(...queryParams: Parameters<typeof query<DocumentData>>): Promise<Client[]> {
  const q = query(...queryParams)
  const docs = await getDocs(q)
  cacheSnapshots(docs)
  return docsToClients(docs)
}

interface ListClientsOptions {
  name?: string // TODO: group into 1 object
  desc?: boolean
  sortBy?: string
  pageSize?: number
}

async function listClients(options: ListClientsOptions): Promise<Client[]> {
  const { name, desc = false, sortBy = 'name', pageSize = defaultLimit } = options

  // Filtering
  const filters: [string, WhereFilterOp, string][] = []
  if (name) filters.push(['name', '==', name])
  whereConstraints = filters.map(f => where(f[0], f[1], f[2]))

  // Sorting
  orderConstraints = [orderBy(sortBy, desc ? 'desc' : 'asc')]

  // Pagination
  limit = pageSize
  const paginationConstraints = [LimitFn(limit)]
  if (firstSnapshot !== undefined) paginationConstraints.push(startAt(firstSnapshot))

  // Fetching
  return executeQuery(clientsRef, ...whereConstraints, ...orderConstraints, ...paginationConstraints)
}

async function listClientsRefresh(): Promise<Client[]> {
  const paginationConstraints = [LimitFn(limit)]
  if (firstSnapshot !== undefined) paginationConstraints.push(startAt(firstSnapshot))
  return executeQuery(clientsRef, ...whereConstraints, ...orderConstraints, ...paginationConstraints)
}

async function listClientsNextPage(): Promise<Client[]> {
  const paginationConstraints = [LimitFn(limit)]
  if (lastSnapshot !== undefined) paginationConstraints.push(startAfter(lastSnapshot))
  return executeQuery(clientsRef, ...whereConstraints, ...orderConstraints, ...paginationConstraints)
}

async function listClientsPreviousPage(): Promise<Client[]> {
  const paginationConstraints = [limitToLast(limit)]
  if (firstSnapshot !== undefined) paginationConstraints.push(endBefore(firstSnapshot))
  return executeQuery(clientsRef, ...whereConstraints, ...orderConstraints, ...paginationConstraints)
}

async function listClientsPageSizeChange(pageSize: number): Promise<Client[]> {
  limit = pageSize
  const paginationConstraints = [LimitFn(limit)]
  return executeQuery(clientsRef, ...whereConstraints, ...orderConstraints, ...paginationConstraints)
}

const list = {
  query: listClients,
  refresh: listClientsRefresh,
  previousPage: listClientsPreviousPage,
  nextPage: listClientsNextPage,
  changePagesize: listClientsPageSizeChange,
}

export { list }

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
