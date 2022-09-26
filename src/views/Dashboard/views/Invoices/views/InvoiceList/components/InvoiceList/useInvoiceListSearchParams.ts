import { useCallback, useMemo } from 'react'
import { ListSearchParams, useListSearchParams } from 'hooks'
import { InvoiceListState } from './InvoiceList.types'

interface InvoiceListSearchParams extends ListSearchParams {
  search: string | null
  status: string | null
}

const paramKey = {
  search: 'search',
  status: 'status',
}

function useInvoiceListSearchParams() {
  const { listSearchParams, searchParams, setSearchParams, ...other } = useListSearchParams()

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

        params.set('page', '0')

        return params
      })
    },
    [setSearchParams],
  )

  const invoiceListSearchParams: InvoiceListSearchParams = useMemo(() => {
    return {
      search: searchParams.get(paramKey.search),
      status: searchParams.get(paramKey.status),
      ...listSearchParams,
    }
  }, [searchParams, listSearchParams])

  return {
    invoiceListSearchParams,
    setFilterParam,
    ...other,
  } as const
}

export { useInvoiceListSearchParams }
export type { InvoiceListSearchParams }
