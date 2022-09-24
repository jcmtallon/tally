import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import { CheckboxProps } from '../Checkbox'
import { TableCellProps } from '../TableCell'
import * as S from './EnhancedTableHead.styles'

interface EnhanceTableHeadCell {
  id: string
  label: string

  /** Use it to set the header cell text alignment  */
  align?: TableCellProps['align']

  /** Use it to set the column width  */
  width?: string

  /** if `true` displays sorting button  */
  sortable?: boolean
}

interface Sorting {
  orderBy: string
  direction: 'asc' | 'desc'
}

type EnhanceTableHeadProps = Merge<
  React.InputHTMLAttributes<HTMLTableSectionElement>,
  {
    /** Requires an array of objects indicating the schema for each column  */
    cells: readonly EnhanceTableHeadCell[]

    /** Array with an unique identifier for each visible row in the table */
    rowIds?: string[]

    /** Applied table sorting state */
    sorting?: Sorting

    /** Array of selected row unique identifiers */
    selectedRowIds?: string[]

    /** Callback fired when the sorting state is modified */
    onSortChanged?: (sorting: Sorting | undefined) => void

    /** Callback fired when the selected state is modified */
    onSelectedChanged?: (selected: string[]) => void

    /** If `true` header checkbox is not displayed */
    hideCheckbox?: boolean

    /** Props applied to the header checkbox. */
    checkboxProps?: Omit<CheckboxProps, 'onChange' | 'checked'>
  }
>

function EnhanceTableHead(props: EnhanceTableHeadProps, ref: Ref<HTMLTableSectionElement>) {
  const {
    cells,
    sorting,
    rowIds = [],
    selectedRowIds = [],
    hideCheckbox = false,
    onSortChanged,
    onSelectedChanged,
    checkboxProps,
    ...otherProps
  } = props

  const handleRequestSort = (field: string) => {
    const isSameField = sorting?.orderBy === field

    if (!isSameField) {
      onSortChanged?.({ orderBy: field, direction: 'asc' })
      return
    }

    if (sorting?.direction === 'desc') {
      onSortChanged?.(undefined)
      return
    }

    onSortChanged?.({ orderBy: field, direction: 'desc' })
  }

  return (
    <S.Head {...otherProps} ref={ref}>
      <S.Row>
        <S.Cell align="center" width="48px">
          {!hideCheckbox && (
            <S.Checkbox
              onChange={e => onSelectedChanged?.(e.target.checked ? rowIds : [])}
              checked={rowIds.length > 0 && selectedRowIds.length === rowIds.length}
              {...checkboxProps}
            />
          )}
        </S.Cell>
        {cells.map(head => (
          <S.SortableCell
            width={head.width}
            key={head.id}
            align={head.align}
            hideSortIcon={!head.sortable}
            active={sorting?.orderBy === head.id}
            direction={sorting?.orderBy === head.id ? sorting.direction : undefined}
            onClick={() => handleRequestSort(head.id)}>
            {head.label}
          </S.SortableCell>
        ))}
      </S.Row>
    </S.Head>
  )
}

const ForwardRefEnhanceTableHead = React.forwardRef(EnhanceTableHead)

export { ForwardRefEnhanceTableHead as EnhanceTableHead }
export type { EnhanceTableHeadProps, EnhanceTableHeadCell, Sorting as TableSorting }
