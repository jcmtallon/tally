import { produce } from 'immer'
import { useReducer } from 'react'
import { InvoiceListSortableField, isInvoiceListSortableFiled } from 'services'
import { isNumber } from 'utils'
import { ClientListSearchParams } from './useInvoiceListSearchParams'
import { InvoiceListState as State } from './InvoiceList.types'

const changeSearchParams = (params: ClientListSearchParams) => ({
  type: 'changeSearchParams' as const,
  payload: params,
})

type Action = ReturnType<typeof changeSearchParams>

function getPage(param: string | null): number {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getLimit(param: string | null) {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getDirection(param: string | null) {
  if (param === null) return undefined
  if (param === 'asc') return 'asc'
  if (param === 'desc') return 'desc'
  return undefined
}

function getOrderBy(param: string | null): InvoiceListSortableField | undefined {
  if (param === null) return undefined

  return isInvoiceListSortableFiled(param) ? param : undefined
}

interface MustResetPageOpts {
  prevState: State
  limit: number
  direction: 'asc' | 'desc' | undefined
  orderBy: InvoiceListSortableField | undefined
  search: string
}

function mustResetPage(opts: MustResetPageOpts): boolean {
  if (opts.prevState.limit !== opts.limit) return true
  if (opts.prevState.direction !== opts.direction) return true
  if (opts.prevState.orderBy !== opts.orderBy) return true
  if (opts.prevState.filters.search !== opts.search) return true
  return false
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeSearchParams':
      return produce(state, draft => {
        const newPage = getPage(action.payload.page)
        const newLimit = getLimit(action.payload.limit)
        const newDirection = getDirection(action.payload.dir)
        const newOrderBy = getOrderBy(action.payload.sort)
        const newSearch = action.payload.search ?? ''

        // TODO(now): Change param into draft State, then move page to last one.
        const resetPage = mustResetPage({
          prevState: state,
          limit: newLimit,
          direction: newDirection,
          orderBy: newOrderBy,
          search: newSearch,
        })

        draft.page = resetPage ? 0 : newPage
        draft.limit = newLimit
        draft.orderBy = newOrderBy
        draft.direction = newDirection
        draft.filters.search = newSearch
      })

    default:
      return state
  }
}

const initialState: State = {
  page: 0,
  limit: 10,
  orderBy: undefined,
  direction: undefined,
  filters: {
    search: '',
  },
}

function useInvoiceListState() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch] as const
}

export { useInvoiceListState }
