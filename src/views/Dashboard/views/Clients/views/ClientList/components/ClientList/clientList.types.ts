import { ListState } from 'hooks'

const CLIENT_LIST_SORTABLE_FIELD = ['name', 'email', 'created', 'updated'] as const
type ClientListSortableField = typeof CLIENT_LIST_SORTABLE_FIELD[number]

const isClientListSortableFiled = (value: string): value is ClientListSortableField =>
  (CLIENT_LIST_SORTABLE_FIELD as readonly string[]).includes(value)

interface ClientListState extends ListState {
  filters: {
    search: string
  }
}

export { isClientListSortableFiled }
export type { ClientListState, ClientListSortableField }
