import { produce } from 'immer'
import { TableSorting } from 'components'
import { useReducer } from 'react'
import { isNumber } from 'utils'
import { isEqual } from 'lodash'

const changeSelected = (selected: string[]) => ({
  type: 'changeSelected' as const,
  payload: { selected },
})

type ListSearchParams = {
  page: string | null
  limit: string | null
  sort: string | null
  dir: string | null
}

const changeSearchParams = (params: ListSearchParams) => ({
  type: 'changeSearchParams' as const,
  payload: params,
})

type State = {
  selected: string[]
  page: number
  limit: number
  sorting: TableSorting | undefined
  filters: {}
}

const initialState: State = {
  selected: [],
  page: 0,
  limit: 10,
  sorting: undefined,
  filters: {},
}

type Action = ReturnType<typeof changeSelected | typeof changeSearchParams>

function getPage(param: string | null): number {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getLimit(param: string | null) {
  return param !== null && isNumber(param) ? parseInt(param, 10) : 0
}

function getSorting(orderBy: string | null, direction: string | null): State['sorting'] {
  if (orderBy === null) return undefined

  return {
    orderBy,
    direction: direction === 'desc' ? 'desc' : 'asc',
  }
}

function mustResetPage(state: State, draft: State): boolean {
  if (state.limit !== draft.limit) return true
  if (state.sorting?.direction !== draft.sorting?.direction) return true
  if (state.sorting?.orderBy !== draft.sorting?.orderBy) return true
  if (!isEqual(state.filters, draft.filters)) return true
  return false
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changeSelected': {
      return produce(state, draft => {
        draft.selected = action.payload.selected
      })
    }

    case 'changeSearchParams': {
      return produce(state, draft => {
        draft.sorting = getSorting(action.payload.sort, action.payload.dir)
        draft.limit = getLimit(action.payload.limit)

        const resetPage = mustResetPage(state, draft)
        draft.page = resetPage ? 0 : getPage(action.payload.page)
        draft.selected = []
      })
    }

    default:
      return state
  }
}

function useListStateReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch] as const
}

export { useListStateReducer }
