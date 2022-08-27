import { createContext, useContext } from 'react'
import { TableSize } from './TableTypes'

interface TableContext {
  size: TableSize
  stickyHeader: boolean
}

const tableContext = createContext<TableContext>({
  size: 'medium',
  stickyHeader: false,
})

function useTableContext() {
  return useContext(tableContext)
}

const TableContextProvider = tableContext.Provider

export { TableContextProvider, useTableContext }
export type { TableContext }
