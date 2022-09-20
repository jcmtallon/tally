import { produce } from 'immer'
import { useReducer } from 'react'
import { isInvoiceListSortableFiled, isInvoiceStatus } from 'services'
import { isNumber } from 'utils'
import { ClientListSearchParams } from './useInvoiceListSearchParams'
import { InvoiceListState as State } from './InvoiceList.types'

const changeSearchParams = (params: ClientListSearchParams) => ({
  type: 'changeSearchParams' as const,
  payload: params,
})

const changeSelected = (selected: string[]) => ({
  type: 'changeSelected' as const,
  payload: { selected },
})

type Action = ReturnType<typeof changeSearchParams | typeof changeSelected>

function getPage(param: string | null): number {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getLimit(param: string | null) {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getSorting(orderBy: string | null, direction: string | null): State['sorting'] {
  if (orderBy === null) return undefined
  if (!isInvoiceListSortableFiled(orderBy)) return undefined

  return {
    orderBy,
    direction: direction === 'desc' ? 'desc' : 'asc',
  }
}

function getStatus(status: string | null): State['filters']['status'] | undefined {
  if (status === null) return undefined
  if (!isInvoiceStatus(status)) return undefined

  return status
}

function mustResetPage(state: State, draft: State): boolean {
  if (state.limit !== draft.limit) return true
  if (state.sorting?.direction !== draft.sorting?.direction) return true
  if (state.sorting?.orderBy !== draft.sorting?.orderBy) return true
  if (state.filters.search !== draft.filters.search) return true
  if (state.filters.status !== draft.filters.status) return true
  return false
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeSearchParams':
      return produce(state, draft => {
        draft.sorting = getSorting(action.payload.sort, action.payload.dir)
        draft.limit = getLimit(action.payload.limit)
        draft.filters.status = getStatus(action.payload.status)
        draft.filters.search = action.payload.search ?? ''

        const resetPage = mustResetPage(state, draft)
        draft.page = resetPage ? 0 : getPage(action.payload.page)
        draft.selected = []
      })

    case 'changeSelected': {
      return produce(state, draft => {
        draft.selected = action.payload.selected
      })
    }

    default:
      return state
  }
}

const initialState: State = {
  selected: [],
  page: 0,
  limit: 10,
  sorting: undefined,
  filters: {
    search: '',
    status: undefined,
  },
}

function useInvoiceListState() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch] as const
}

export { useInvoiceListState }
