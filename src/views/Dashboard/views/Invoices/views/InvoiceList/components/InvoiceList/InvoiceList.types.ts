import { InvoiceListSortableField } from 'services'

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
  }
}

export type { InvoiceListState }
