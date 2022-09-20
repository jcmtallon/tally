import { InvoiceListSortableField, InvoiceStatus } from 'services'

type InvoiceListState = {
  selected: string[]
  page: number
  limit: number
  sorting:
    | {
        orderBy: InvoiceListSortableField
        direction: 'asc' | 'desc'
      }
    | undefined
  filters: {
    search: string
    status: InvoiceStatus | undefined
  }
}

export type { InvoiceListState }
