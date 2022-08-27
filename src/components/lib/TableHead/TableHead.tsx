import React, { Ref } from 'react'
import { Merge } from 'type-fest'
import * as S from './TableHead.styles'

type TableHeadProps = Merge<React.InputHTMLAttributes<HTMLTableSectionElement>, {}>

function TableHead(props: TableHeadProps, ref: Ref<HTMLTableSectionElement>) {
  return <S.TableHead ref={ref} {...props} />
}

const ForwardRefTableHead = React.forwardRef(TableHead)

export { ForwardRefTableHead as TableHead }
export type { TableHeadProps }

// TODO: Create EnhancedTableHead with sorting props
