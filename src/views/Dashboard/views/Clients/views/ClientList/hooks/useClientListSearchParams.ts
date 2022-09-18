import { SortingState } from '@tanstack/react-table'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ClientListSearchFormState } from '../components/ClientListSearchForm'

const paramKey = {
  sort: 'sort',
  dir: 'dir',
  limit: 'limit',
  name: 'name',
}

type ClientListSearchParams = {
  sort: string | null
  direction: string | null
  limit: string | null
  name: string | null
}

function useClientListSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setSortingParams = useCallback(
    (values: SortingState) => {
      setSearchParams(params => {
        const sort = values[0]?.id || undefined
        const dir = values[0]?.desc ? 'desc' : 'asc'

        if (sort) {
          params.set(paramKey.sort, sort)
        } else {
          params.delete(paramKey.sort)
        }

        if (dir === 'desc') {
          params.set(paramKey.dir, dir)
        } else {
          params.delete(paramKey.dir)
        }

        return params
      })
    },
    [setSearchParams],
  )

  const setLimitParams = useCallback(
    (value: number) => {
      setSearchParams({ [paramKey.limit]: value.toString() })
    },
    [setSearchParams],
  )

  const setFilterParams = useCallback(
    (values: ClientListSearchFormState) => {
      setSearchParams(params => {
        if (values.name !== '') {
          params.set(paramKey.name, values.name)
        } else {
          params.delete(paramKey.name)
        }

        return params
      })
    },
    [setSearchParams],
  )

  const searchParamsQuery: ClientListSearchParams = useMemo(() => {
    return {
      sort: searchParams.get(paramKey.sort),
      direction: searchParams.get(paramKey.dir),
      limit: searchParams.get(paramKey.limit),
      name: searchParams.get(paramKey.name),
    }
  }, [searchParams])

  return {
    searchParamsQuery,
    setSortingParams,
    setLimitParams,
    setFilterParams,
  } as const
}

export { useClientListSearchParams }
export type { ClientListSearchParams }