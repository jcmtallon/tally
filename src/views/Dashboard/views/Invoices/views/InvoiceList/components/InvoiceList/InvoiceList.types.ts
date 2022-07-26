import { ListState } from 'hooks'
import { InvoiceStatus } from 'services'

// TODO: make so these array values are typed also as Invoice keys.

const INVOICE_LIST_SORTABLE_FIELD = [
  'clientName',
  'costAmount',
  'invoiceNumber',
  'status',
  'draft',
  'created',
] as const
type InvoiceListSortableField = typeof INVOICE_LIST_SORTABLE_FIELD[number]

const isInvoiceListSortableFiled = (value: string): value is InvoiceListSortableField =>
  (INVOICE_LIST_SORTABLE_FIELD as readonly string[]).includes(value)

interface InvoiceListState extends ListState {
  filters: {
    search: string
    status: InvoiceStatus | undefined
  }
}

export { isInvoiceListSortableFiled }
export type { InvoiceListState, InvoiceListSortableField }
