import { createContext, useContext } from 'react'

interface TableContext {
  padding: string
  size: 'small' | 'medium'
  stickyHeader: boolean
}

const tableContext = createContext<TableContext>({
  padding: '',
  size: 'medium',
  stickyHeader: false,
})

function useTableContext() {
  return useContext(tableContext)
}

const TableContextProvider = tableContext.Provider

export { TableContextProvider, useTableContext }
export type { TableContext }
