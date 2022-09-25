import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ClientListState } from './clientList.types'

type ClientListSearchParams = {
  page: string | null
  limit: string | null
  sort: string | null
  dir: string | null
  search: string | null
  status: string | null
}

const paramKey: Record<keyof ClientListSearchParams, keyof ClientListSearchParams> = {
  page: 'page',
  limit: 'limit',
  sort: 'sort',
  dir: 'dir',
  search: 'search',
  status: 'status',
}

function useClientListSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setPageParam = useCallback(
    (page: ClientListState['page']) => {
      setSearchParams(params => {
        params.set(paramKey.page, page.toString())
        return params
      })
    },
    [setSearchParams],
  )

  const setLimitParam = useCallback(
    (value: ClientListState['limit']) => {
      setSearchParams(params => {
        params.set(paramKey.limit, value.toString())
        return params
      })
    },
    [setSearchParams],
  )

  const setSortingParams = useCallback(
    (sorting: ClientListState['sorting']) => {
      setSearchParams(params => {
        if (!sorting) {
          params.delete(paramKey.sort)
          params.delete(paramKey.dir)
        } else {
          params.set(paramKey.sort, sorting.orderBy)
          params.set(paramKey.dir, sorting.direction)
        }

        return params
      })
    },
    [setSearchParams],
  )

  const setFilterParam = useCallback(
    (values: ClientListState['filters']) => {
      setSearchParams(params => {
        if (values.search) {
          params.set(paramKey.search, values.search)
        } else {
          params.delete(paramKey.search)
        }

        return params
      })
    },
    [setSearchParams],
  )

  const searchParamsQuery: ClientListSearchParams = useMemo(() => {
    return {
      sort: searchParams.get(paramKey.sort),
      page: searchParams.get(paramKey.page),
      limit: searchParams.get(paramKey.limit),
      dir: searchParams.get(paramKey.dir),
      search: searchParams.get(paramKey.search),
      status: searchParams.get(paramKey.status),
    }
  }, [searchParams])

  return {
    searchParamsQuery,
    setLimitParam,
    setPageParam,
    setSortingParams,
    setFilterParam,
  } as const
}

export { useClientListSearchParams }
export type { ClientListSearchParams }
