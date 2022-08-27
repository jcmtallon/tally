import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import * as S from './TableCell.styles'

type TableCellProps = Merge<
  React.InputHTMLAttributes<HTMLTableCellElement>,
  {
    /** Specify the cell type. The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components. */
    variant?: 'body' | 'head' | 'footer'

    /** Set the text-align on the table cell content. */
    align?: 'center' | 'inherit' | 'left' | 'right'

    /** Specify the size of the cell. The prop defaults to the value ('medium') inherited from the parent Table component. */
    size?: 'medium' | 'small'

    sortDirection?: 'asc' | 'desc' | false
  }
>

function TableCell(props: TableCellProps, ref: Ref<HTMLTableCellElement>) {
  const { variant = 'body', align = 'inherit', size = 'medium', sortDirection = false, ...otherProps } = props

  if (variant === 'head') {
    return <S.HeadCell ref={ref} {...otherProps} />
  }

  if (variant === 'footer') {
    return <S.FootCell ref={ref} {...otherProps} />
  }

  return <S.DataCell ref={ref} {...otherProps} />
}

const ForwardRefTableCell = React.forwardRef(TableCell)

export { ForwardRefTableCell as TableCell }
export type { TableCellProps }
