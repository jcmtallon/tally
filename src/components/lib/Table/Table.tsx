import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import * as S from './Table.styles'
import { TableContextProvider } from './TableContextProvider'

type TableProps = Merge<
  React.InputHTMLAttributes<HTMLTableElement>,
  {
    /** Mandatory to enforce accessibility good practices */
    ['aria-label']: string

    /** Set the header sticky. */
    stickyHeader?: boolean

    /** TableCells inherit the size specified in this prop */
    size?: 'small' | 'medium'
  }
>

function Table(props: TableProps, ref: Ref<HTMLTableElement>) {
  const { size = 'medium', stickyHeader = false, ...otherProps } = props

  const table = React.useMemo(() => ({ padding: '', size, stickyHeader }), [size, stickyHeader])

  return (
    <TableContextProvider value={table}>
      <S.Table ref={ref} {...otherProps} />
    </TableContextProvider>
  )
}

const ForwardRefTable = React.forwardRef(Table)

export { ForwardRefTable as Table }
export type { TableProps }
