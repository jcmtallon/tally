import React, { HTMLAttributes } from 'react'
import { Merge } from 'type-fest'
import { createStylableComponent } from 'utils'
import * as S from './TableSortLabel.styles'

type TableSortLabelProps = Merge<
  HTMLAttributes<HTMLSpanElement>,
  {
    /** Displays active styling. Should be true for the sorted column. */
    active?: boolean
  }
>

function TableSortLabel(props: TableSortLabelProps) {
  const { children, ...otherProps } = props
  return (
    <S.Span {...otherProps}>
      {children}
      <S.ArrowIcon />
    </S.Span>
  )
}

const StylableTableSortLabel = createStylableComponent(S, TableSortLabel)

export { StylableTableSortLabel as TableSortLabel }
export type { TableSortLabelProps }
