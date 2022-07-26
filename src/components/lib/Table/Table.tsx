import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import { TableContextProvider } from './TableContextProvider'
import { TableSize } from './TableTypes'
import * as S from './Table.styles'

type TableProps = Merge<
  React.InputHTMLAttributes<HTMLTableElement>,
  {
    /** Mandatory to enforce accessibility good practices */
    ['aria-label']: string

    /** Set the header sticky. */
    stickyHeader?: boolean

    /** TableCells inherit the size specified in this prop */
    size?: TableSize
  }
>

function Table(props: TableProps, ref: Ref<HTMLTableElement>) {
  const { size = 'medium', stickyHeader = false, ...otherProps } = props

  const table = React.useMemo(() => ({ padding: '', size, stickyHeader }), [size, stickyHeader])

  return (
    <TableContextProvider value={table}>
      <S.Table ref={ref} isSticky={stickyHeader} {...otherProps} />
    </TableContextProvider>
  )
}

const ForwardRefTable = React.forwardRef(Table)

export { ForwardRefTable as Table }
export type { TableProps }
