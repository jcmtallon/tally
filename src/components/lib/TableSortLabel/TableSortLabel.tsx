import React, { HTMLAttributes, Ref } from 'react'
import { Merge } from 'type-fest'
import { createStylableComponent } from 'utils'
import * as S from './TableSortLabel.styles'

type TableSortLabelProps = Merge<
  HTMLAttributes<HTMLSpanElement>,
  {
    /** Displays active styling. Should be true for the sorted column. */
    active?: boolean

    /** The current sort direction. */
    direction?: 'asc' | 'desc'

    /** Hide sort icon when active is false. */
    hideSortIcon?: boolean

    /** Triggers when sort label is clicked */
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
  }
>

function TableSortLabel(props: TableSortLabelProps, ref: Ref<HTMLSpanElement>) {
  const { direction = 'desc', active = false, hideSortIcon = false, children, ...otherProps } = props

  return (
    <S.Span active={active} ref={ref} {...otherProps} tabIndex={0} role="button">
      {children}
      {hideSortIcon && !active ? <></> : <S.ArrowIcon direction={direction} />}
    </S.Span>
  )
}

const ForwardRefTableSortLabel = React.forwardRef(TableSortLabel)

const StylableTableSortLabel = createStylableComponent(S, ForwardRefTableSortLabel)

export { StylableTableSortLabel as TableSortLabel }
export type { TableSortLabelProps }
