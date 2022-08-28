import React from 'react'
import { Merge } from 'type-fest'
import { createStylableComponent } from 'utils'
import * as S from './TableContainer.styles'

type TableContainerProps = Merge<React.InputHTMLAttributes<HTMLDivElement>, {}>

function TableContainer(props: TableContainerProps) {
  return <S.Container {...props} />
}

const StylableTableContainer = createStylableComponent(S, TableContainer)

export { StylableTableContainer as TableContainer }
export type { TableContainerProps }
