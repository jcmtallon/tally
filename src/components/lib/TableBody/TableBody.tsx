import React from 'react'
import { Merge } from 'type-fest'

type TableBodyProps = Merge<React.InputHTMLAttributes<HTMLTableSectionElement>, {}>

function TableBody(props: TableBodyProps) {
  return <tbody {...props} />
}

export { TableBody }
export type { TableBodyProps }
