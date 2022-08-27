import React from 'react'
import { Merge } from 'type-fest'

type TableCellProps = Merge<
  React.InputHTMLAttributes<HTMLTableCellElement>,
  {
    /** Specify the cell type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components. */
    variant?: 'body' | 'head'

    /** Set the text-align on the table cell content. */
    align?: 'center' | 'inherit' | 'left' | 'right'

    /** Specify the size of the cell. The prop defaults to the value ('medium') inherited from the parent Table component. */
    size?: 'medium' | 'small'

    sortDirection?: 'asc' | 'desc' | false
  }
>

function TableCell(props: TableCellProps) {
  const { variant = 'body', align = 'inherit', size = 'medium', sortDirection = false, ...otherProps } = props

  if (variant === 'head') {
    return <th {...otherProps} />
  }

  return <td {...otherProps} />
}

export { TableCell }
export type { TableCellProps }
