import React, { HTMLAttributes, useMemo } from 'react'
import { createStylableComponent } from 'utils'
import { Invoice } from 'services'
import { EnhanceTableHeadCell, TableSorting as Sorting } from 'components'
import { Merge } from 'type-fest'
import { isInvoiceListSortableFiled } from '../InvoiceList'
import * as S from './InvoiceTable.styles'

interface InvoiceTableProps extends HTMLAttributes<HTMLDivElement> {
  invoices?: Invoice[]
  sorting?: Sorting
  selected?: Invoice['invoiceId'][]

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

  type TableHeadCell = Merge<EnhanceTableHeadCell, { id: keyof Invoice | 'revenue' }>
  const headCells: readonly TableHeadCell[] = useMemo(() => {
    const cells: TableHeadCell[] = [
      { label: 'Número', id: 'invoiceNumber', width: '100px' },
      { label: 'Nombre del cliente', id: 'clientName' },
      { label: 'Cargo', id: 'costAmount', width: '50px' },
      { label: 'Ganancia', id: 'revenue', width: '50px' },
      { label: 'Borr.', id: 'draft', width: '50px' },
      { label: 'Creada', id: 'created', width: '180px' },
      { label: 'Estado', id: 'status', align: 'right', width: '120px' },
    ]

    return cells.map(cell => {
      // eslint-disable-next-line no-param-reassign -- Shrug
      cell.sortable = isInvoiceListSortableFiled(cell.id)
      return cell
    })
  }, [])

  const allRowIds = useMemo(() => invoices.map(n => n.invoiceId), [invoices])

  return (
    <S.TableContainer {...otherProps}>
      <S.Table stickyHeader aria-label="Invoices Table">
        <S.EnhancedTableHead
          cells={headCells}
          rowIds={allRowIds}
          sorting={sorting}
          selectedRowIds={selected}
          onSortChanged={onSortChanged}
          onSelectedChanged={onSelectedChanged}
        />
        <S.TableBody>
          {invoices.map((invoice, index) => (
            <S.TableRow key={invoice.invoiceId} onClick={() => onRowClicked?.(invoice.invoiceId)}>
              <S.Cell align="center">
                <S.EnhancedCheckbox
                  rowId={invoice.invoiceId}
                  selectedRowIds={selected}
                  aria-labelledby={`table-checkbox-${index}`}
                  onSelectedChanged={onSelectedChanged}
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
