import React, { HTMLAttributes, useMemo } from 'react'
import { createStylableComponent } from 'utils'
import { Client } from 'services'
import { EnhanceTableHeadCell, TableSorting as Sorting } from 'components'
import { Merge } from 'type-fest'
import { isClientListSortableFiled } from '../ClientList'
import * as S from './ClientTable.styles'

interface ClientTableProps extends HTMLAttributes<HTMLDivElement> {
  clients?: Client[]
  sorting?: Sorting
  selected?: Client['clientId'][]

  onRowClicked?: (clientId: Client['clientId']) => void
  onSortChanged?: (sorting: Sorting | undefined) => void
  onSelectedChanged?: (selected: string[]) => void
}

function ClientTable(props: ClientTableProps) {
  const {
    clients = [],
    selected = [],
    sorting,
    onRowClicked,
    onSortChanged,
    onSelectedChanged,
    ...otherProps
  } = props

  type TableHeadCell = Merge<EnhanceTableHeadCell, { id: keyof Client | 'revenue' }>
  const headCells: readonly TableHeadCell[] = useMemo(() => {
    const cells: TableHeadCell[] = [
      { label: 'Nombre', id: 'name' },
      { label: 'E-mail', id: 'email' },
      { label: 'Teléfono', id: 'phone' },
      { label: 'ID', id: 'clientId' },
      { label: 'Notas', id: 'notes' },
    ]

    return cells.map(cell => {
      // eslint-disable-next-line no-param-reassign -- Shrug
      cell.sortable = isClientListSortableFiled(cell.id)
      return cell
    })
  }, [])

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
            <S.TableRow key={client.clientId} onClick={() => onRowClicked?.(client.clientId)}>
              <S.Cell align="center">
                <S.EnhancedCheckbox
                  rowId={client.clientId}
                  selectedRowIds={selected}
                  aria-labelledby={`table-checkbox-${index}`}
                  onSelectedChanged={onSelectedChanged}
                  onClick={e => e.stopPropagation()}
                />
              </S.Cell>
              <S.Cell>{client.name}</S.Cell>
              <S.Cell>{client.email}</S.Cell>
              <S.Cell>{client.phone}</S.Cell>
              <S.Cell>{client.clientId}</S.Cell>
              <S.Cell>{client.notes}</S.Cell>
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
