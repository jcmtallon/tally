import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import { TableCellVariant, TableSize, useTableContext, useTableSectionContext } from '../Table'
import * as S from './TableCell.styles'

type TableCellProps = Merge<
  React.InputHTMLAttributes<HTMLTableCellElement>,
  {
    /** Specify the cell type. Defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components. */
    variant?: TableCellVariant

    /** Set the text-align on the table cell content. */
    align?: 'center' | 'inherit' | 'left' | 'right' | 'justify'

    /** Specify the size of the cell. The prop defaults to the value 'medium' inherited from the parent Table component. */
    size?: TableSize

    /** Set aria-sort direction. */
    sortDirection?: 'asc' | 'desc'
  }
>

function TableCell(props: TableCellProps, ref: Ref<HTMLTableCellElement>) {
  const {
    align = 'inherit',
    size = undefined,
    sortDirection = undefined,
    variant = undefined,
    ...otherProps
  } = props

  const table = useTableContext()
  const tableSection = useTableSectionContext()

  const componentType = {
    head: S.HeadCell,
    body: S.BodyCell,
    footer: S.FootCell,
  }

  const component = componentType[variant || tableSection.variant || 'body']
  const sizeStyle = size || table.size || 'medium'

  // The aria-sort attribute indicates if items in a table or grid
  // are sorted in ascending or descending order.
  const getAriaSort = (sort?: 'asc' | 'desc') => {
    if (!sort) return undefined
    return sort === 'asc' ? 'ascending' : 'descending'
  }

  return (
    <S.Cell
      aria-sort={getAriaSort(sortDirection)}
      as={component}
      ref={ref}
      size={sizeStyle}
      textAlign={align}
      {...otherProps}
    />
  )
}

const ForwardRefTableCell = React.forwardRef(TableCell)

export { ForwardRefTableCell as TableCell }
export type { TableCellProps }
