import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import * as S from './TableRow.styles'

type TableRowProps = Merge<
  React.InputHTMLAttributes<HTMLTableRowElement>,
  {
    /** If true, the table row will shade on hover. */
    hover?: boolean
  }
>

function TableRow(props: TableRowProps, ref: Ref<HTMLTableRowElement>) {
  return <S.TableRow ref={ref} {...props} />
}

const ForwardRefTableRow = React.forwardRef(TableRow)

export { ForwardRefTableRow as TableRow }
export type { TableRowProps }
