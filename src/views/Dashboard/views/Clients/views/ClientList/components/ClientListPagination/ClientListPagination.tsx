import React, { useState } from 'react'
import { createStylableComponent } from 'utils'
import * as S from './ClientListPagination.styles'

interface ClientListPaginationProps {
  resultsCount: number

  onPreviousPageButtonClicked?: () => Promise<void>
  onNextPageButtonClicked?: () => Promise<void>
  onRowsPerPageChange?: (value: number) => Promise<void>
}

function ClientListPagination(props: ClientListPaginationProps) {
  const {
    resultsCount,
    onPreviousPageButtonClicked,
    onNextPageButtonClicked,
    onRowsPerPageChange,
    ...otherProps
  } = props

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handlePreviousPageClick = async () => {
    await onPreviousPageButtonClicked?.()
    setPage(page => page - 1)
  }

  const handleNextPageClick = async () => {
    await onNextPageButtonClicked?.()
    setPage(page => page + 1)
  }

  const handleRowsPerPageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = +event.target.value
    await onRowsPerPageChange?.(newRowsPerPage)
    setRowsPerPage(newRowsPerPage)
  }

  // TODO: rethink this label (better way to calculate TO)
  const labelDisplayedRows = ({ from, to }: { from: number; to: number }): string => {
    return `${from}-${to}`
  }

  return (
    <S.TablePagination
      {...otherProps}
      labelDisplayedRows={labelDisplayedRows}
      // TODO: handling when we click next and a empty array is returned
      previousPageButtonProps={{ onClick: handlePreviousPageClick }}
      nextPageButtonProps={{ onClick: handleNextPageClick, disabled: resultsCount < rowsPerPage }}
      onRowsPerPageChange={handleRowsPerPageChange}
      rowCount={-1}
      page={page}
      rowsPerPage={rowsPerPage}
    />
  )
}

const StylableClientListPagination = createStylableComponent(S, ClientListPagination)

export { StylableClientListPagination as ClientListPagination }
export type { ClientListPaginationProps }
