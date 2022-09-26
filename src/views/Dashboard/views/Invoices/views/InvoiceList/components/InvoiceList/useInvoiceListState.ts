import { produce } from 'immer'
import { useReducer } from 'react'
import { isInvoiceStatus } from 'services'
import { listInitialState, listStateReducer } from 'hooks'
import { InvoiceListSearchParams } from './useInvoiceListSearchParams'
import { InvoiceListState as State } from './InvoiceList.types'

const changeSearchParams = (params: InvoiceListSearchParams) => ({
  type: 'changeSearchParams' as const,
  payload: params,
})

const changeSelected = (selected: string[]) => ({
  type: 'changeSelected' as const,
  payload: { selected },
})

const resetFilters = () => ({
  type: 'resetFilters' as const,
})

type Action = ReturnType<typeof changeSearchParams | typeof changeSelected | typeof resetFilters>

const initialState: State = {
  ...listInitialState,
  filters: {
    search: '',
    status: undefined,
  },
}

function getStatus(status: string | null): State['filters']['status'] | undefined {
  if (status === null) return undefined
  if (!isInvoiceStatus(status)) return undefined

  return status
}

function mustResetPage(state: State['filters'], draft: State['filters']): boolean {
  if (state.search !== draft.search) return true
  if (state.status !== draft.status) return true

  return false
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeSearchParams':
      return produce(state, draft => {
        const listState = listStateReducer(state, action)

        draft.limit = listState.limit
        draft.sorting = listState.sorting
        draft.selected = listState.selected

        draft.filters.search = action.payload.search ?? ''
        draft.filters.status = getStatus(action.payload.status)

        draft.page = mustResetPage(state.filters, draft.filters) ? 0 : listState.page
      })

    case 'changeSelected': {
      return produce(state, draft => {
        draft.selected = action.payload.selected
      })
    }

    case 'resetFilters': {
      return initialState
    }

    default:
      return state
  }
}

function useInvoiceListState() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch] as const
}

export { useInvoiceListState }
