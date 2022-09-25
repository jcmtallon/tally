import { produce } from 'immer'
import { useReducer } from 'react'
import { isNumber } from 'utils'
import { ClientListSearchParams } from './useClientListSearchParams'
import { ClientListState as State, isClientListSortableFiled } from './clientList.types'

const changeSearchParams = (params: ClientListSearchParams) => ({
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

function getPage(param: string | null): number {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getLimit(param: string | null) {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getSorting(orderBy: string | null, direction: string | null): State['sorting'] {
  if (orderBy === null) return undefined
  if (!isClientListSortableFiled(orderBy)) return undefined

  return {
    orderBy,
    direction: direction === 'desc' ? 'desc' : 'asc',
  }
}

function mustResetPage(state: State, draft: State): boolean {
  if (state.limit !== draft.limit) return true
  if (state.sorting?.direction !== draft.sorting?.direction) return true
  if (state.sorting?.orderBy !== draft.sorting?.orderBy) return true
  if (state.filters.search !== draft.filters.search) return true
  return false
}

const initialState: State = {
  selected: [],
  page: 0,
  limit: 10,
  sorting: undefined,
  filters: {
    search: '',
  },
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeSearchParams':
      return produce(state, draft => {
        draft.sorting = getSorting(action.payload.sort, action.payload.dir)
        draft.limit = getLimit(action.payload.limit)
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

    case 'resetFilters': {
      return initialState
    }

    default:
      return state
  }
}

function useClientListState() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch] as const
}

export { useClientListState }
