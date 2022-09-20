// import { collection, getDocs, query } from 'firebase/firestore/lite'
// import { firestore } from '../../firestoreSetup'
import { Invoice, InvoiceStatus } from '../../types'
import { paginateData, sortData } from '../../utils'
import { mockInvoices } from './mockInvoices'

// TODO: cache data.
// TODO: refresh method for refreshing the list? Or different method to update only updated element...
// but when a change could apply to multiple invoices, customers... better to refetch everything.

// TODO: Variable for switching to MOCK_DATA

const INVOICE_LIST_SORTABLE_FIELD = ['clientName', 'costAmount'] as const
type InvoiceListSortableField = typeof INVOICE_LIST_SORTABLE_FIELD[number]

const isInvoiceListSortableFiled = (value: string): value is InvoiceListSortableField =>
  (INVOICE_LIST_SORTABLE_FIELD as readonly string[]).includes(value)

function filterBySearchText(data: Invoice[], search: string): Invoice[] {
  if (search === '') return data

  const regexp = new RegExp(search, 'i')
  return data.filter(x => regexp.test(x.clientName))
}

function filterByStatus(data: Invoice[], status: InvoiceStatus | undefined): Invoice[] {
  if (status === undefined) return data

  return data.filter(x => x.status === status)
}

interface ListInvoicesResponse {
  data: Invoice[]
  total: number
}

interface ListInvoicesOptions {
  limit?: number
  page?: number
  direction?: 'asc' | 'desc'
  sortBy?: InvoiceListSortableField
  search?: string
  status?: InvoiceStatus
}

const listInvoices = async (opts: ListInvoicesOptions): Promise<ListInvoicesResponse> => {
  const { limit = 10, page = 0, direction = 'asc', sortBy = undefined, search = '', status } = opts
  // const clientsRef = collection(firestore, `invoices`)
  // const q = query(clientsRef)
  // const docs = await getDocs(q)
  const data = mockInvoices as Invoice[]
  const filteredByStatusData = filterByStatus(data, status)
  const filteredByTextData = filterBySearchText(filteredByStatusData, search)
  const sortedData = sortBy ? sortData(filteredByTextData, direction, sortBy) : filteredByTextData
  const slicedData = paginateData(sortedData, page, limit)

  return {
    data: slicedData,
    total: data.length,
  }
}

export { listInvoices, isInvoiceListSortableFiled, INVOICE_LIST_SORTABLE_FIELD }
export type { ListInvoicesResponse, ListInvoicesOptions, InvoiceListSortableField }
