import React, { Ref, MouseEvent } from 'react'
import { Merge } from 'type-fest'
import { ButtonProps } from '../Button'
import * as S from './TablePaginationActions.styles'

type TablePaginationActionsProps = Merge<
  React.HTMLAttributes<HTMLDivElement>,
  {
    /** The total number of rows. To enable server side pagination for an unknown number of items, provide -1. */
    rowCount: number

    /** The zero-based index of the current page. */
    page: number

    /** The number of rows per page. Set -1 to display all the rows. */
    rowsPerPage: number

    /** If `true`, show the first-page button. */
    showFirstPageButton?: boolean

    /** If `true`, show the last-page button. */
    showLastPageButton?: boolean

    /** Callback fired when the page is changed. */
    onPageChange?: (event: MouseEvent<HTMLButtonElement>, page: number) => void

    /** Use it to provide user-friendly names for the action buttons. Important for screen reader users. */
    getItemAriaLabel?: (type: string) => string

    /** Props applied to the first page button element. */
    firstPageButtonProps?: ButtonProps

    /** Props applied to the previous page button element. */
    previousPageButtonProps?: ButtonProps

    /** Props applied to the next page button element. */
    nextPageButtonProps?: ButtonProps

    /** Props applied to the last page button element. */
    lastPageButtonProps?: ButtonProps
  }
>

function defaultGetAriaLabel(type: string) {
  return `Go to ${type} page`
}

function TablePaginationActions(props: TablePaginationActionsProps, ref: Ref<HTMLDivElement>) {
  const {
    onPageChange,
    page,
    rowCount,
    rowsPerPage,
    firstPageButtonProps = {},
    previousPageButtonProps = {},
    nextPageButtonProps = {},
    lastPageButtonProps = {},
    showFirstPageButton = false,
    showLastPageButton = false,
    getItemAriaLabel = defaultGetAriaLabel,
    ...otherProps
  } = props

  const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange?.(event, 0)
  }

  const handlePreviousPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange?.(event, page - 1)
  }

  const handleNextPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange?.(event, page + 1)
  }

  const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange?.(event, Math.max(0, Math.ceil(rowCount / rowsPerPage) - 1))
  }

  return (
    <S.Container ref={ref} {...otherProps}>
      {showFirstPageButton && (
        <S.IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label={getItemAriaLabel('first')}
          title={getItemAriaLabel('first')}
          {...firstPageButtonProps}>
          <S.FirstPageIcon />
        </S.IconButton>
      )}
      <S.IconButton
        onClick={handlePreviousPageButtonClick}
        disabled={page === 0}
        aria-label={getItemAriaLabel('previous')}
        title={getItemAriaLabel('previous')}
        {...previousPageButtonProps}>
        <S.LeftIcon />
      </S.IconButton>
      <S.IconButton
        onClick={handleNextPageButtonClick}
        disabled={rowCount !== -1 ? page >= Math.ceil(rowCount / rowsPerPage) - 1 : false}
        aria-label={getItemAriaLabel('next')}
        title={getItemAriaLabel('next')}
        {...nextPageButtonProps}>
        <S.RightIcon />
      </S.IconButton>
      {showLastPageButton && (
        <S.IconButton
          onClick={handleLastPageButtonClick}
          disabled={page === 0}
          aria-label={getItemAriaLabel('last')}
          {...lastPageButtonProps}>
          <S.LastPageIcon />
        </S.IconButton>
      )}
    </S.Container>
  )
}

const ForwardRefTablePaginationActions = React.forwardRef(TablePaginationActions)

export { ForwardRefTablePaginationActions as TablePaginationActions }
export type { TablePaginationActionsProps }
