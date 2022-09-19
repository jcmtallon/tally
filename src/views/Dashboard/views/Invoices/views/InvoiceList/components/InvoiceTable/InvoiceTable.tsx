import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import { Invoice, InvoiceListSortableField } from 'services'
import { TableCellProps } from 'components'
import * as S from './InvoiceTable.styles'

interface Sorting {
  orderBy: InvoiceListSortableField
  direction: 'asc' | 'desc'
}

interface InvoiceTableProps extends HTMLAttributes<HTMLDivElement> {
  invoices?: Invoice[]
  sorting?: Sorting

  onRowClicked?: (clientId: Invoice['invoiceId']) => void
  onCheckboxClicked?: (clientId: Invoice['invoiceId']) => void
  onSortChanged?: (sorting: Sorting | undefined) => void
}

function InvoiceTable(props: InvoiceTableProps) {
  const { invoices = [], sorting, onRowClicked, onSortChanged, ...otherProps } = props

  const handleRequestSort = (field: InvoiceListSortableField) => {
    const isSameField = sorting?.orderBy === field

    if (!isSameField) {
      onSortChanged?.({ orderBy: field, direction: 'asc' })
      return
    }

    if (sorting?.direction === 'desc') {
      onSortChanged?.(undefined)
      return
    }

    onSortChanged?.({ orderBy: field, direction: 'desc' })
  }

  interface HeadCell {
    id: keyof Invoice
    label: string
    align?: TableCellProps['align']
  }

  const headCells: readonly HeadCell[] = [
    { label: 'Nombre del cliente', id: 'clientName' },
    { label: 'Coste', id: 'costAmount' },
    { label: 'Estado', id: 'status', align: 'right' },
  ]

  return (
    <S.TableContainer {...otherProps}>
      <S.Table stickyHeader aria-label="Invoices Table">
        <S.TableHead>
          <S.TableRow>
            {/* <S.Cell align="center">
              <S.Checkbox
                onChange={handleSelectAllClick}
                aria-label="some aria label"
                checked={clients.length > 0 && selected.length === clients.length}
              />
            </S.Cell> */}
            {headCells.map(head => (
              <S.SortableCell
                key={head.id}
                align={head.align}
                active={sorting?.orderBy === head.id}
                direction={sorting?.orderBy === head.id ? sorting.direction : undefined}
                onClick={() => handleRequestSort(head.id as InvoiceListSortableField)}>
                {head.label}
              </S.SortableCell>
            ))}
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {invoices.map(invoice => {
            // const isItemSelected = isSelected(client.clientId)
            // const labelId = `enhanced-table-checkbox-${index}`

            return (
              <S.TableRow key={invoice.invoiceId} onClick={() => onRowClicked?.(invoice.invoiceId)}>
                {/* <S.Cell align="center">
                  <S.Checkbox
                    aria-labelledby={labelId}
                    checked={isItemSelected}
                    onChange={() => handleCheckboxChange(client.clientId)}
                    onClick={e => e.stopPropagation()}
                  />
                </S.Cell> */}
                <S.Cell>{invoice.clientName}</S.Cell>
                <S.Cell>{invoice.costAmount}</S.Cell>
                <S.Cell align="right">{invoice.status}</S.Cell>
              </S.TableRow>
            )
          })}
        </S.TableBody>
      </S.Table>
    </S.TableContainer>
  )
}

const StylableInvoiceTable = createStylableComponent(S, InvoiceTable)

export { StylableInvoiceTable as InvoiceTable }
export type { InvoiceTableProps }
