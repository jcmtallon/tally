import React, { MouseEventHandler } from 'react'
import { createStylableComponent } from 'utils'
import { Merge } from 'type-fest'
import * as S from './TableRowCheckbox.styles'
import { CheckboxTableCellProps } from '../CheckboxTableCell'

type TableRowCheckboxProps = Merge<
  Omit<CheckboxTableCellProps, 'checked'>,
  {
    rowId: string
    selectedRowIds: string[]

    onSelectedChanged?: (selected: string[]) => void
  }
>

function TableRowCheckbox(props: TableRowCheckboxProps) {
  const { selectedRowIds: selected, rowId, onSelectedChanged, ...otherProps } = props

  const handleCheckboxChange = (name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    onSelectedChanged?.(newSelected)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  const handleOnClick: MouseEventHandler<HTMLTableCellElement> = e => {
    e.stopPropagation()
    handleCheckboxChange(rowId)
  }

  return <S.CheckboxCell {...otherProps} checked={isSelected(rowId)} onClick={handleOnClick} />
}

const StylableTableRowCheckbox = createStylableComponent(S, TableRowCheckbox)

export { StylableTableRowCheckbox as TableRowCheckbox }
export type { TableRowCheckboxProps }
