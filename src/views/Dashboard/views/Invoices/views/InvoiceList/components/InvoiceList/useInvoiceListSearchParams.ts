import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

type ClientListSearchParams = {
  page: string | null
  limit: string | null
  sort: string | null
  dir: string | null
}

const paramKey: Record<keyof ClientListSearchParams, keyof ClientListSearchParams> = {
  page: 'page',
  limit: 'limit',
  sort: 'sort',
  dir: 'dir',
}

function useInvoiceListSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setPageParam = useCallback(
    (page: number) => {
      setSearchParams(params => {
        params.set(paramKey.page, page.toString())
        return params
      })
    },
    [setSearchParams],
  )

  const setLimitParam = useCallback(
    (value: number) => {
      setSearchParams(params => {
        params.set(paramKey.limit, value.toString())
        return params
      })
    },
    [setSearchParams],
  )

  const setSortingParams = useCallback(
    (orderBy: string | undefined, direction: 'asc' | 'desc' | undefined) => {
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

  const searchParamsQuery: ClientListSearchParams = useMemo(() => {
    return {
      sort: searchParams.get(paramKey.sort),
      page: searchParams.get(paramKey.page),
      limit: searchParams.get(paramKey.limit),
      dir: searchParams.get(paramKey.dir),
    }
  }, [searchParams])

  return {
    searchParamsQuery,
    setLimitParam,
    setPageParam,
    setSortingParams,
  } as const
}

export { useInvoiceListSearchParams }
export type { ClientListSearchParams }
