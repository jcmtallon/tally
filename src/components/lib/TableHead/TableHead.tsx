import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import { TableSectionContextProvider } from '../Table'
import * as S from './TableHead.styles'

type TableHeadProps = Merge<React.InputHTMLAttributes<HTMLTableSectionElement>, {}>

function TableHead(props: TableHeadProps, ref: Ref<HTMLTableSectionElement>) {
  return (
    <TableSectionContextProvider value={{ variant: 'head' }}>
      <S.TableHead ref={ref} {...props} />
    </TableSectionContextProvider>
  )
}

const ForwardRefTableHead = React.forwardRef(TableHead)

export { ForwardRefTableHead as TableHead }
export type { TableHeadProps }
