import React, { HTMLAttributes } from 'react'
import { createStylableComponent } from 'utils'
import { Invoice } from 'services'
import * as S from './InvoiceTable.styles'

// TODO: extend container props?
interface InvoiceTableProps extends HTMLAttributes<HTMLDivElement> {
  invoices?: Invoice[]

  onRowClicked?: (clientId: Invoice['invoiceId']) => void
  onCheckboxClicked?: (clientId: Invoice['invoiceId']) => void
}

function InvoiceTable(props: InvoiceTableProps) {
  const { invoices = [], onRowClicked, ...otherProps } = props

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
            </S.Cell>
            <S.SortableCell
              active={orderBy === 'name'}
              direction={orderBy === 'name' ? order : 'asc'}
              onClick={() => handleSortClick('name')}>
              Nombre
            </S.SortableCell>
            <S.SortableCell
              active={orderBy === 'email'}
              direction={orderBy === 'email' ? order : 'asc'}
              onClick={() => handleSortClick('email')}>
              E-mail
            </S.SortableCell> */}
            <S.Cell>Nombre del cliente</S.Cell>
            <S.Cell>Coste</S.Cell>
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
