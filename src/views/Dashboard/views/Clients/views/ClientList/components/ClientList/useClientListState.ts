import { produce } from 'immer'
import { useReducer } from 'react'
import { listInitialState, listStateReducer, mapConfigToListInitialState } from 'hooks'
import { ClientListState as State } from './clientList.types'
import { ClientListSearchParams } from './useClientListSearchParams'

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

const initialState: State = {
  ...listInitialState,
  filters: {
    search: '',
  },
}

function mustResetPage(state: State['filters'], draft: State['filters']): boolean {
  if (state.search !== draft.search) return true

  return false
}

function reducer(state: State, action: Action): State {
  console.log('reducer')

  switch (action.type) {
    case 'changeSearchParams':
      return produce(state, draft => {
        const listState = listStateReducer(state, action)

        draft.limit = listState.limit
        draft.sorting = listState.sorting ?? initialState.sorting
        draft.selected = listState.selected

        draft.filters.search = action.payload.search ?? ''
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

function mapConfigToInitialState(config?: ClientListSearchParams): State {
  if (!config) return initialState

  const baseState = mapConfigToListInitialState(config)

  console.log('baseState')

  return {
    ...baseState,
    filters: {
      search: config.search ?? initialState.filters.search,
    },
  }
}

function useClientListState(config?: ClientListSearchParams) {
  const [state, dispatch] = useReducer(reducer, config, mapConfigToInitialState)
  return [state, dispatch] as const
}

export { useClientListState }
