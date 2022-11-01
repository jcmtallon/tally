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

    /** If `true`, displays fade-in fade-out animation  */
    animate?: boolean
  }
>

function TableRow(props: TableRowProps, ref: Ref<HTMLTableRowElement>) {
  const { hover = false, selected = false, animate = false } = props
  return <S.TableRow shadeOnHover={hover} selected={selected} animate={animate} ref={ref} {...props} />
}

const ForwardRefTableRow = React.forwardRef(TableRow)

export { ForwardRefTableRow as TableRow }
export type { TableRowProps }
