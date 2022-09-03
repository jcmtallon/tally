import React, { InputHTMLAttributes, Ref } from 'react'
import { Merge } from 'type-fest'
import { createStylableComponent } from 'utils'
import { TableSize } from '../Table'
import * as S from './TableSortableCell.styles'

type TableSortableCellProps = Merge<
  InputHTMLAttributes<HTMLTableCellElement>,
  {
    /** Set the text-align on the table cell content. */
    align?: 'center' | 'inherit' | 'left' | 'right' | 'justify'

    /** Specify the size of the cell. The prop defaults to the value 'medium' inherited from the parent Table component. */
    size?: TableSize

    /** Sets padding applied for specific cases. Defaults to padding applied by 'size' props. */
    padding?: 'none' | 'inherit' // TODO: add checkbox option

    /** Displays active styling. Should be true for the sorted column. */
    active?: boolean

    /** The current sort direction. */
    direction?: 'asc' | 'desc'

    /** Hide sort icon when active is false. */
    hideSortIcon?: boolean

    /** Triggers when sort label is clicked */
    onSortLabelClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
  }
>

function TableSortableCell(props: TableSortableCellProps, ref: Ref<HTMLTableCellElement>) {
  const {
    active,
    align,
    padding,
    size = undefined,
    direction = 'desc',
    hideSortIcon = false,
    children,
    onSortLabelClick,
    ...otherProps
  } = props

  return (
    <S.Cell
      ref={ref}
      align={align}
      padding={padding}
      size={size}
      variant="head"
      sortDirection={direction}
      {...otherProps}>
      <S.SortLabel
        hideSortIcon={hideSortIcon}
        active={active}
        direction={direction}
        onClick={onSortLabelClick}>
        {children}
      </S.SortLabel>
    </S.Cell>
  )
}

const ForwardRefTableSortableCell = React.forwardRef(TableSortableCell)

const StylableTableSortableCell = createStylableComponent(S, ForwardRefTableSortableCell)

export { StylableTableSortableCell as TableSortableCell }
export type { TableSortableCellProps }
