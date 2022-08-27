import { createContext, useContext } from 'react'
import { TableCellVariant } from './TableTypes'

interface TableSectionContext {
  variant: TableCellVariant
}

const tableSectionContext = createContext<TableSectionContext>({
  variant: 'body',
})

function useTableSectionContext() {
  return useContext(tableSectionContext)
}

const TableSectionContextProvider = tableSectionContext.Provider

export { TableSectionContextProvider, useTableSectionContext }
export type { TableSectionContext }
