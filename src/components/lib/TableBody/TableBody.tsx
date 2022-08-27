import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import { TableSectionContextProvider } from '../Table'
import * as S from './TableBody.styles'

type TableBodyProps = Merge<React.InputHTMLAttributes<HTMLTableSectionElement>, {}>

function TableBody(props: TableBodyProps, ref: Ref<HTMLTableSectionElement>) {
  return (
    <TableSectionContextProvider value={{ variant: 'body' }}>
      <S.TableBody ref={ref} {...props} />
    </TableSectionContextProvider>
  )
}

const ForwardRefTableBody = React.forwardRef(TableBody)

export { ForwardRefTableBody as TableBody }
export type { TableBodyProps }
