import React from 'react'
import { Merge } from 'type-fest'

type TableRowProps = Merge<
  React.InputHTMLAttributes<HTMLTableRowElement>,
  {
    /** If true, the table row will shade on hover. */
    hover?: boolean
  }
>

function TableRow(props: TableRowProps) {
  return <tr {...props} />
}

export { TableRow }
export type { TableRowProps }
