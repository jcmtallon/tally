import { TableSorting } from 'components'

// TODO: make so these array values are typed also as Client keys.

const CLIENT_LIST_SORTABLE_FIELD = ['name', 'email'] as const
type ClientListSortableField = typeof CLIENT_LIST_SORTABLE_FIELD[number]

const isClientListSortableFiled = (value: string): value is ClientListSortableField =>
  (CLIENT_LIST_SORTABLE_FIELD as readonly string[]).includes(value)

type ClientListState = {
  selected: string[]
  page: number
  limit: number
  sorting: TableSorting | undefined
  filters: {
    search: string
  }
}

export { isClientListSortableFiled }
export type { ClientListState, ClientListSortableField }
