import { TableSorting } from 'components'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

type ListSearchParams = {
  page: string | null
  limit: string | null
  sort: string | null
  dir: string | null
}

const paramKey: Record<keyof ListSearchParams, keyof ListSearchParams> = {
  page: 'page',
  limit: 'limit',
  sort: 'sort',
  dir: 'dir',
}

function useListSearchParams() {
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
    (sorting: TableSorting | undefined) => {
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

  const listSearchParams: ListSearchParams = useMemo(() => {
    return {
      sort: searchParams.get(paramKey.sort),
      page: searchParams.get(paramKey.page),
      limit: searchParams.get(paramKey.limit),
      dir: searchParams.get(paramKey.dir),
    }
  }, [searchParams])

  return {
    searchParams,
    listSearchParams,
    setLimitParam,
    setPageParam,
    setSearchParams,
    setSortingParams,
  } as const
}

export { useListSearchParams }
export type { ListSearchParams }
