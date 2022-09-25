import { useCallback, useMemo } from 'react'
import { ListSearchParams, useListSearchParams } from 'hooks'
import { ClientListState } from './clientList.types'

interface ClientListSearchParams extends ListSearchParams {
  search: string | null
  status: string | null
}

const paramKey = {
  search: 'search',
  status: 'status',
}

function useClientListSearchParams() {
  const { listSearchParams, searchParams, setSearchParams, ...other } = useListSearchParams()

  const setFilterParam = useCallback(
    (values: ClientListState['filters']) => {
      setSearchParams(params => {
        if (values.search) {
          params.set(paramKey.search, values.search)
        } else {
          params.delete(paramKey.search)
        }

        params.set('page', '0')

        return params
      })
    },
    [setSearchParams],
  )

  const clientListSearchParams: ClientListSearchParams = useMemo(() => {
    return {
      search: searchParams.get(paramKey.search),
      status: searchParams.get(paramKey.status),
      ...listSearchParams,
    }
  }, [searchParams, listSearchParams])

  return {
    clientListSearchParams,
    setFilterParam,
    ...other,
  } as const
}

export { useClientListSearchParams }
export type { ClientListSearchParams }
