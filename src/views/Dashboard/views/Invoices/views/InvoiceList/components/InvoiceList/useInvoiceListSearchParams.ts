import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { InvoiceListState } from './InvoiceList.types'

type InvoiceListSearchParams = {
  page: string | null
  limit: string | null
  sort: string | null
  dir: string | null
  search: string | null
  status: string | null
}

const paramKey: Record<keyof InvoiceListSearchParams, keyof InvoiceListSearchParams> = {
  page: 'page',
  limit: 'limit',
  sort: 'sort',
  dir: 'dir',
  search: 'search',
  status: 'status',
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
        params.delete(paramKey.page)
        return params
      })
    },
    [setSearchParams],
  )

  const setSortingParams = useCallback(
    (sorting: InvoiceListState['sorting']) => {
      setSearchParams(params => {
        if (!sorting) {
          params.delete(paramKey.sort)
          params.delete(paramKey.dir)
        } else {
          params.set(paramKey.sort, sorting.orderBy)
          params.set(paramKey.dir, sorting.direction)
        }

        params.delete(paramKey.page)

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

        if (values.status) {
          params.set(paramKey.status, values.status)
        } else {
          params.delete(paramKey.status)
        }

        params.delete(paramKey.page)

        return params
      })
    },
    [setSearchParams],
  )

  const searchParamsQuery: InvoiceListSearchParams = useMemo(() => {
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

export { useInvoiceListSearchParams }
export type { InvoiceListSearchParams }
