import React, { ReactNode, Ref, useEffect } from 'react'
import { Merge } from 'type-fest'
import { SelectProps } from '../Select'
import * as S from './TablePagination.styles'
import { TablePaginationActionsProps } from './TablePaginationActions'

type TablePaginationBaseProps = Merge<React.HTMLAttributes<HTMLDivElement>, TablePaginationActionsProps>

type TablePaginationProps = Merge<
  TablePaginationBaseProps,
  {
    /** The zero-based index of the current page. */
    page: number

    /** The total number of rows. To enable server side pagination for an unknown number of items, provide -1. */
    rowCount: number

    /** The number of rows per page. Set -1 to display all the rows. */
    rowsPerPage: number

    /** Customizes the options of the rows per page select field. If less than two options are * available, no select field will be displayed. */
    rowsPerPageOptions?: number[]

    /** Customize the rows per page label. 'Rows per page:' */
    rowsPerPageSelectLabel?: ReactNode

    /** Use it to customize the displayed rows per page label text. */
    labelDisplayedRows?: (props: { from: number; to: number; count: number }) => string

    /** Callback fired when the number of rows per page is changed. */
    onRowsPerPageChange?: React.ChangeEventHandler<HTMLSelectElement>

    /** Props applied to the rows per page select element. */
    SelectProps?: SelectProps
  }
>

function defaultLabelDisplayedRows({ from, to, count }: { from: number; to: number; count: number }): string {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`
}

function TablePagination(props: TablePaginationProps, ref: Ref<HTMLDivElement>) {
  const {
    rowsPerPageOptions = [10, 25, 50, 100],
    rowsPerPageSelectLabel = 'Rows per page:',
    onRowsPerPageChange,
    labelDisplayedRows = defaultLabelDisplayedRows,
    getItemAriaLabel,
    onPageChange,
    SelectProps = {},
    rowsPerPage,
    page,
    rowCount,
    showFirstPageButton,
    showLastPageButton,
    previousPageButtonProps,
    nextPageButtonProps,
    firstPageButtonProps,
    lastPageButtonProps,
    ...otherProps
  } = props

  useEffect(() => {
    if (rowCount === -1) return

    const newLastPage = Math.max(0, Math.ceil(rowCount / rowsPerPage) - 1)

    if (page < 0 || page > newLastPage) {
      throw new Error(
        `The page prop of a TablePagination is out of range (0 to ${newLastPage}, but page is ${page}).`,
      )
    }
  }, [rowCount, page, rowsPerPage])

  // TODO: improve on this
  const selectOptions = rowsPerPageOptions.map(opt => ({ value: opt, label: opt.toString() }))

  const getLabelDisplayedRowsTo = (): number => {
    if (rowCount === -1) return (page + 1) * rowsPerPage
    return rowsPerPage === -1 ? rowCount : Math.min(rowCount, (page + 1) * rowsPerPage)
  }

  return (
    <S.Container ref={ref} {...otherProps}>
      <S.Toolbar>
        <S.RowsPerPageContainer>
          {rowsPerPageOptions.length > 1 && <S.RowsPerPageLabel>{rowsPerPageSelectLabel}</S.RowsPerPageLabel>}
          {rowsPerPageOptions.length > 1 && (
            <S.RowsPerPageSelect onChange={onRowsPerPageChange} options={selectOptions} {...SelectProps} />
          )}
        </S.RowsPerPageContainer>
        <S.DisplayedRowsLabel>
          {labelDisplayedRows({
            from: rowCount === 0 ? 0 : page * rowsPerPage + 1,
            to: getLabelDisplayedRowsTo(),
            count: rowCount === -1 ? -1 : rowCount, // TODO: What?
          })}
        </S.DisplayedRowsLabel>
        <S.Actions
          rowsPerPage={rowsPerPage}
          getItemAriaLabel={getItemAriaLabel}
          page={page}
          rowCount={rowCount}
          onPageChange={onPageChange}
          showFirstPageButton={showFirstPageButton}
          showLastPageButton={showLastPageButton}
          previousPageButtonProps={previousPageButtonProps}
          nextPageButtonProps={nextPageButtonProps}
          firstPageButtonProps={firstPageButtonProps}
          lastPageButtonProps={lastPageButtonProps}
        />
      </S.Toolbar>
    </S.Container>
  )
}

const ForwardRefTablePagination = React.forwardRef(TablePagination)

export { ForwardRefTablePagination as TablePagination }
export type { TablePaginationProps }
