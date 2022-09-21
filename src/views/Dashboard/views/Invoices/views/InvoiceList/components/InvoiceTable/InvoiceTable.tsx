import React, { HTMLAttributes, useMemo } from 'react'
import { createStylableComponent } from 'utils'
import { Invoice } from 'services'
import { TableCellProps } from 'components'
import { InvoiceListSortableField, isInvoiceListSortableFiled } from '../InvoiceList'
import * as S from './InvoiceTable.styles'

interface Sorting {
  orderBy: InvoiceListSortableField
  direction: 'asc' | 'desc'
}

interface InvoiceTableProps extends HTMLAttributes<HTMLDivElement> {
  invoices?: Invoice[]
  sorting?: Sorting
  selected?: string[]

  onRowClicked?: (clientId: Invoice['invoiceId']) => void
  onSortChanged?: (sorting: Sorting | undefined) => void
  onSelectedChanged?: (selected: string[]) => void
}

function InvoiceTable(props: InvoiceTableProps) {
  const {
    invoices = [],
    selected = [],
    sorting,
    onRowClicked,
    onSortChanged,
    onSelectedChanged,
    ...otherProps
  } = props

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

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = invoices.map(n => n.invoiceId)
      onSelectedChanged?.(newSelected)
      return
    }
    onSelectedChanged?.([])
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

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

  interface HeadCell {
    id: keyof Invoice | 'revenue'
    label: string
    align?: TableCellProps['align']
    width?: string
    sortable?: boolean
  }

  // Crear enhanced TableHead component. Pass this object from parent Table component.
  const headCells: readonly HeadCell[] = useMemo(
    () => [
      {
        label: 'Número',
        id: 'invoiceNumber',
        width: '100px',
        sortable: isInvoiceListSortableFiled('invoiceNumber'),
      },
      { label: 'Nombre del cliente', id: 'clientName', sortable: isInvoiceListSortableFiled('clientName') },
      { label: 'Cargo', id: 'costAmount', sortable: isInvoiceListSortableFiled('costAmount') },
      { label: 'Ganancia', id: 'revenue', sortable: isInvoiceListSortableFiled('revenue') },
      { label: 'Borrador', id: 'draft', sortable: isInvoiceListSortableFiled('draft') },
      { label: 'Creada', id: 'created', sortable: isInvoiceListSortableFiled('created') },
      { label: 'Estado', id: 'status', align: 'right', sortable: isInvoiceListSortableFiled('status') },
    ],
    [],
  )

  return (
    <S.TableContainer {...otherProps}>
      <S.Table stickyHeader aria-label="Invoices Table">
        <S.TableHead>
          <S.TableRow>
            <S.Cell align="center" width="48px">
              <S.Checkbox
                onChange={handleSelectAllClick}
                aria-label="Seleccionar todas las facturas"
                checked={invoices.length > 0 && selected.length === invoices.length}
              />
            </S.Cell>
            {headCells.map(head => (
              <S.SortableCell
                width={head.width}
                key={head.id}
                align={head.align}
                hideSortIcon={!head.sortable}
                active={sorting?.orderBy === head.id}
                direction={sorting?.orderBy === head.id ? sorting.direction : undefined}
                onClick={() => handleRequestSort(head.id as InvoiceListSortableField)}>
                {head.label}
              </S.SortableCell>
            ))}
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {invoices.map((invoice, index) => (
            <S.TableRow key={invoice.invoiceId} onClick={() => onRowClicked?.(invoice.invoiceId)}>
              <S.Cell align="center">
                <S.Checkbox
                  aria-labelledby={`table-checkbox-${index}`}
                  checked={isSelected(invoice.invoiceId)}
                  onChange={() => handleCheckboxChange(invoice.invoiceId)}
                  onClick={e => e.stopPropagation()}
                />
              </S.Cell>
              <S.Cell>{invoice.invoiceNumber}</S.Cell>
              <S.Cell>
                <S.ClientNameWrapper>
                  <S.ClientName>{invoice.clientName}</S.ClientName>
                  <S.ClientMail>{invoice.clientEmail}</S.ClientMail>
                </S.ClientNameWrapper>
              </S.Cell>
              <S.Cell>{invoice.totalAmount}</S.Cell>
              <S.Cell>+60€</S.Cell>
              <S.Cell>{invoice.draft && 'B'}</S.Cell>
              <S.Cell>{invoice.created && invoice.created.toLocaleString()}</S.Cell>
              <S.Cell align="right">{invoice.status}</S.Cell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.TableContainer>
  )
}

const StylableInvoiceTable = createStylableComponent(S, InvoiceTable)

export { StylableInvoiceTable as InvoiceTable }
export type { InvoiceTableProps }
