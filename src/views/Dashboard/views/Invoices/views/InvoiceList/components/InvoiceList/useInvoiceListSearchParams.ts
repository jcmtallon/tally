import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { InvoiceListState } from './InvoiceList.types'

type ClientListSearchParams = {
  page: string | null
  limit: string | null
  sort: string | null
  dir: string | null
  search: string | null
}

const paramKey: Record<keyof ClientListSearchParams, keyof ClientListSearchParams> = {
  page: 'page',
  limit: 'limit',
  sort: 'sort',
  dir: 'dir',
  search: 'search',
}

function useInvoiceListSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setPageParam = useCallback(
    (page: InvoiceListState['page']) => {
      setSearchParams(params => {
        params.set(paramKey.page, page.toString())
        return params
      })
    },
    [setSearchParams],
  )

  const setLimitParam = useCallback(
    (value: InvoiceListState['limit']) => {
      setSearchParams(params => {
        params.set(paramKey.limit, value.toString())
        return params
      })
    },
    [setSearchParams],
  )

  const setSortingParams = useCallback(
    (orderBy: InvoiceListState['orderBy'], direction: InvoiceListState['direction']) => {
      setSearchParams(params => {
        if (orderBy) {
          params.set(paramKey.sort, orderBy)
        } else {
          params.delete(paramKey.sort)
        }

        if (direction) {
          params.set(paramKey.dir, direction)
        } else {
          params.delete(paramKey.dir)
        }

        return params
      })
    },
    [setSearchParams],
  )

  const setFilterParam = useCallback(
    (values: InvoiceListState['filters']) => {
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

export { useInvoiceListSearchParams }
export type { ClientListSearchParams }
