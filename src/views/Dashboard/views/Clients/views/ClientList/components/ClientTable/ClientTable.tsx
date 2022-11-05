import React, { HTMLAttributes, useCallback, useMemo, useState } from 'react'
import { createStylableComponent } from 'utils'
import { Client, CLIENT_TYPE } from 'services'
import { EnhanceTableHeadCell, TableSorting as Sorting } from 'components'
import { Merge } from 'type-fest'
import { DateTime, getDurationToNow } from 'features/dateTime'
import { isClientListSortableFiled } from '../ClientList'
import * as S from './ClientTable.styles'

interface ClientTableProps extends HTMLAttributes<HTMLDivElement> {
  clients?: Client[]
  sorting?: Sorting
  selected?: Client['clientId'][]
  opened?: Client['clientId']

  onRowClicked?: (clientId: Client['clientId']) => void
  onSortChanged?: (sorting: Sorting | undefined) => void
  onSelectedChanged?: (selected: string[]) => void
}

function ClientTable(props: ClientTableProps) {
  const {
    clients = [],
    selected = [],
    sorting,
    opened,
    onRowClicked,
    onSortChanged,
    onSelectedChanged,
    ...otherProps
  } = props

  const [dateFieldType, setDateFieldType] = useState<'created' | 'updated'>('created')

  type TableHeadCell = Merge<EnhanceTableHeadCell, { id: keyof Client | 'revenue' | 'invoices' | 'created' }>
  const headCells: readonly TableHeadCell[] = useMemo(() => {
    const cells: TableHeadCell[] = [
      { label: 'Nombre / Razón', id: 'name' },
      { label: 'E-mail', id: 'email', width: '260px' },
      { label: 'Teléfono', id: 'phone', width: '130px' },
      { label: 'Facturas', id: 'invoices', width: '130px', align: 'right' },
    ]

    cells.push(
      dateFieldType === 'created'
        ? { label: 'Añadido hace', id: 'created', width: '160px' }
        : { label: 'Editado hace', id: 'updated', width: '160px' },
    )

    return cells.map(cell => {
      // eslint-disable-next-line no-param-reassign -- Shrug
      cell.sortable = isClientListSortableFiled(cell.id)
      return cell
    })
  }, [dateFieldType])

  const handleDateFieldTypeChange: React.MouseEventHandler<HTMLTableCellElement> = useCallback(
    e => {
      e.stopPropagation()
      setDateFieldType(prev => (prev === 'created' ? 'updated' : 'created'))
    },
    [setDateFieldType],
  )

  const allRowIds = useMemo(() => clients.map(n => n.clientId), [clients])

  return (
    <S.TableContainer {...otherProps}>
      <S.Table stickyHeader aria-label="Clients Table">
        <S.EnhancedTableHead
          cells={headCells}
          rowIds={allRowIds}
          sorting={sorting}
          selectedRowIds={selected}
          onSortChanged={onSortChanged}
          onSelectedChanged={onSelectedChanged}
        />
        <S.TableBody>
          {clients.map((client, index) => (
            <S.TableRow
              animate={getDurationToNow(DateTime.fromISO(client.created)).toMillis() < 10000}
              hover
              selected={selected.indexOf(client.clientId) !== -1 || opened === client.clientId}
              key={client.clientId}
              onClick={() => onRowClicked?.(client.clientId)}>
              <S.EnhancedCheckbox
                rowId={client.clientId}
                selectedRowIds={selected}
                aria-labelledby={`table-checkbox-${index}`}
                onSelectedChanged={onSelectedChanged}
              />
              <S.Cell padding="chip">
                <S.ClientName
                  clientName={client.name}
                  clientType={client.clientType || CLIENT_TYPE.INDIVIDUAL}
                />
              </S.Cell>
              <S.Cell>{client.email || '-'}</S.Cell>
              <S.Cell>{client.phone || '-'}</S.Cell>
              <S.Cell align="right">
                <S.InvoiceCount count={client.invoicesCount} />
              </S.Cell>
              <S.DateCell onClick={handleDateFieldTypeChange}>
                {dateFieldType === 'created' ? (
                  <>{client.created ? <S.DurationDisplay date={DateTime.fromISO(client.created)} /> : '-'}</>
                ) : (
                  <>{client.updated ? <S.DurationDisplay date={DateTime.fromISO(client.updated)} /> : '-'}</>
                )}
              </S.DateCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.TableContainer>
  )
}

const StylableClientTable = createStylableComponent(S, ClientTable)

export { StylableClientTable as ClientTable }
export type { ClientTableProps }
