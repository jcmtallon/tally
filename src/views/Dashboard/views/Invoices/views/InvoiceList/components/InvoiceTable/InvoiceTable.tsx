import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import { Invoice } from 'services'
import * as S from './InvoiceTable.styles'

type SortDirection = 'asc' | 'desc'

interface InvoiceTableProps extends HTMLAttributes<HTMLDivElement> {
  invoices?: Invoice[]
  orderBy?: string
  order?: SortDirection

  onRowClicked?: (clientId: Invoice['invoiceId']) => void
  onCheckboxClicked?: (clientId: Invoice['invoiceId']) => void
  onSortChanged?: (orderBy: string | undefined, direction: SortDirection | undefined) => void
}

function InvoiceTable(props: InvoiceTableProps) {
  const {
    invoices = [],
    orderBy = undefined,
    order = undefined,
    onRowClicked,
    onSortChanged,
    ...otherProps
  } = props

  const handleRequestSort = (field: string) => {
    const isSameField = orderBy === field

    if (!isSameField) {
      onSortChanged?.(field, 'asc')
      return
    }

    if (order === 'desc') {
      onSortChanged?.(undefined, undefined)
      return
    }

    onSortChanged?.(field, 'desc')
  }

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
            <S.SortableCell
              active={orderBy === 'clientName'}
              direction={orderBy === 'clientName' ? order : undefined}
              onClick={() => handleRequestSort('clientName')}>
              Nombre del cliente
            </S.SortableCell>
            <S.SortableCell
              active={orderBy === 'costAmount'}
              direction={orderBy === 'costAmount' ? order : undefined}
              onClick={() => handleRequestSort('costAmount')}>
              Coste
            </S.SortableCell>
            <S.Cell align="right">Status</S.Cell>
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
