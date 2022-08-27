import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import * as S from './TableBody.styles'

type TableBodyProps = Merge<React.InputHTMLAttributes<HTMLTableSectionElement>, {}>

function TableBody(props: TableBodyProps, ref: Ref<HTMLTableSectionElement>) {
  return <S.TableBody ref={ref} {...props} />
}

const ForwardRefTableBody = React.forwardRef(TableBody)

export { ForwardRefTableBody as TableBody }
export type { TableBodyProps }
