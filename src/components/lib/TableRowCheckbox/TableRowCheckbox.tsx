import React from 'react'
import { createStylableComponent } from 'utils'
import { Merge } from 'type-fest'
import * as S from './TableRowCheckbox.styles'
import { CheckboxProps } from '../Checkbox'

type TableRowCheckboxProps = Merge<
  Omit<CheckboxProps, 'onChange' | 'checked'>,
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

  return (
    <S.Checkbox {...otherProps} checked={isSelected(rowId)} onChange={() => handleCheckboxChange(rowId)} />
  )
}

const StylableTableRowCheckbox = createStylableComponent(S, TableRowCheckbox)

export { StylableTableRowCheckbox as TableRowCheckbox }
export type { TableRowCheckboxProps }
