import React, { Ref, forwardRef, MouseEventHandler } from 'react'
import { Merge } from 'type-fest'
import { CheckboxProps } from '../Checkbox'
import { TableCellProps } from '../TableCell'
import * as S from './CheckboxTableCell.styles'

type CheckboxTableCellProps = Merge<
  Omit<TableCellProps, 'align' | 'padding'>,
  {
    /** Callback fired when the cell or the checkbox are clicked.  */
    onClick?: MouseEventHandler<HTMLTableCellElement>

    /** If true, the component is checked. */
    checked: boolean

    /** Props applied to the checkbox component. */
    checkboxProps?: CheckboxProps
  }
>

function CheckboxTableCell(props: CheckboxTableCellProps, ref: Ref<HTMLTableCellElement>) {
  const { checked, checkboxProps, onClick, ...otherProps } = props

  return (
    <S.Cell align="center" padding="checkbox" onClick={onClick} {...otherProps} ref={ref}>
      <S.Checkbox checked={checked} readOnly {...checkboxProps} />
    </S.Cell>
  )
}

const ForwardRefCheckboxTableCell = forwardRef(CheckboxTableCell)

export { ForwardRefCheckboxTableCell as CheckboxTableCell }
export type { CheckboxTableCellProps }
