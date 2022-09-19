import { InvoiceListSortableField } from 'services'

type InvoiceListState = {
  page: number
  limit: number
  orderBy: InvoiceListSortableField | undefined
  direction: 'asc' | 'desc' | undefined
  filters: {
    search: string
  }
}

export type { InvoiceListState }
