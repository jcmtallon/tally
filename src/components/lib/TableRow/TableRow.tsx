import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import * as S from './TableRow.styles'

type TableRowProps = Merge<
  React.InputHTMLAttributes<HTMLTableRowElement>,
  {
    /** If true, the table row will shade on hover. */
    hover?: boolean

    /** If `true`, the table row will have the selected shading. */
    selected?: boolean
  }
>

function TableRow(props: TableRowProps, ref: Ref<HTMLTableRowElement>) {
  const { hover = false, selected = false } = props
  return <S.TableRow shadeOnHover={hover} selected={selected} ref={ref} {...props} />
}

const ForwardRefTableRow = React.forwardRef(TableRow)

export { ForwardRefTableRow as TableRow }
export type { TableRowProps }
