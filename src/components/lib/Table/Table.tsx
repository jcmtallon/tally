import React from 'react'
import { Merge } from 'type-fest'

type TableProps = Merge<
  React.InputHTMLAttributes<HTMLTableElement>,
  {
    /** Mandatory to enforce accessibility good practices */
    ['aria-label']: string

    /** Set the header sticky. */
    stickyHeader?: string

    /** TableCells inherit the size specified in this prop */
    size?: 'small' | 'medium'
  }
>

function Table(props: TableProps) {
  return <table {...props} />
}

export { Table }
export type { TableProps }

// sticky

// TableHead
// TableRow
// - xs: ''
// TableCell
// - align='right'
// - component: th
// - scope: row

// TableBody
