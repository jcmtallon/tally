// import { collection, getDocs, query } from 'firebase/firestore/lite'
// import { firestore } from '../../firestoreSetup'
import { Invoice } from '../../types'
import { paginateData, sortData } from '../../utils'
import { mockInvoices } from './mockInvoices'

// TODO: cache data.
// TODO: refresh method for refreshing the list? Or different method to update only updated element...
// but when a change could apply to multiple invoices, customers... better to refetch everything.

const INVOICE_LIST_SORTABLE_FIELD = ['clientName', 'costAmount'] as const
type InvoiceListSortableField = typeof INVOICE_LIST_SORTABLE_FIELD[number]

const isInvoiceListSortableFiled = (value: string): value is InvoiceListSortableField =>
  (INVOICE_LIST_SORTABLE_FIELD as readonly string[]).includes(value)

interface ListInvoicesResponse {
  data: Invoice[]
  total: number
}

interface ListInvoicesOptions {
  limit?: number
  page?: number
  direction?: 'asc' | 'desc'
  sortBy?: InvoiceListSortableField
}

const listInvoices = async (opts: ListInvoicesOptions): Promise<ListInvoicesResponse> => {
  const { limit = 10, page = 0, direction = 'asc', sortBy = undefined } = opts
  // const clientsRef = collection(firestore, `invoices`)
  // const q = query(clientsRef)
  // const docs = await getDocs(q)
  const data = mockInvoices as Invoice[]
  const sortedData = sortBy ? sortData(data, direction, sortBy) : data
  const slicedData = paginateData(sortedData, page, limit)

  return {
    data: slicedData,
    total: data.length,
  }
}

export { listInvoices, isInvoiceListSortableFiled, INVOICE_LIST_SORTABLE_FIELD }
export type { ListInvoicesResponse, ListInvoicesOptions, InvoiceListSortableField }
