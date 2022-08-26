import React from 'react'
import { Merge } from 'type-fest'

type TableHeadProps = Merge<React.InputHTMLAttributes<HTMLTableSectionElement>, {}>

function TableHead(props: TableHeadProps) {
  return <thead {...props} />
}

export { TableHead }
export type { TableHeadProps }

// TODO: Create EnhancedTableHead with sorting props
