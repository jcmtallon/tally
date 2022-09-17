import React, { HTMLAttributes, useMemo, useState } from 'react'
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
} from '@tanstack/react-table'
import { createStylableComponent } from 'utils'
import { Client } from 'services'
import * as S from './ClientTable.styles'

const columnHelper = createColumnHelper<Client>()

// TODO: lines

// TODO: extend container props?
// TODO: clicking sort icon 3 times disables sorting.
interface ClientTableProps extends HTMLAttributes<HTMLDivElement> {
  clients?: Client[]
  // sortingState
  className?: string // TODO: Class to container, otherProps to Table.

  onRowClicked?: (clientId: Client['clientId']) => void
  onCheckboxClicked?: (clientId: Client['clientId']) => void
  onSortingChange?: (sorting: SortingState) => void
}

function ClientTable(props: ClientTableProps) {
  const { clients = [], onRowClicked, onSortingChange, ...otherProps } = props

  const columns = useMemo(
    () => [
      columnHelper.display({
        id: 'select',
        meta: { align: 'right' },
        header: ({ table }) => (
          <S.Checkbox
            type="checkbox"
            aria-label="some aria label"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <S.Checkbox
            type="checkbox"
            aria-label="some aria label"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      }),
      columnHelper.accessor('name', {
        header: () => 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('email', {
        header: () => <span>E-mail</span>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('phone', {
        header: () => <span>Teléfono</span>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('clientId', {
        header: () => <span>ID</span>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('notes', {
        header: () => <span>Notes</span>,
        cell: info => info.getValue(),
      }),
    ],
    [],
  )

  const [sorting, setSorting] = useState<SortingState>([{ id: 'name', desc: true }])

  const handleSortingChange = (updaterOrValue: SortingState | ((old: SortingState) => SortingState)) => {
    const value = typeof updaterOrValue === 'function' ? updaterOrValue(sorting) : updaterOrValue
    setSorting(value)
    onSortingChange?.(value)
  }

  const table = useReactTable({
    data: clients,
    columns,
    state: {
      sorting,
    },
    manualPagination: true,
    pageCount: -1, // # of pages unknown due to Firebase limitations (don't wanna paid for a Club function either)
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: handleSortingChange,
  })

  return (
    <S.Container {...otherProps}>
      <S.TableContainer>
        <S.Table stickyHeader aria-label="Clients Table">
          <S.TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <S.TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return header.column.getCanSort() ? (
                    <S.SortableCell
                      key={header.id}
                      onSortLabelClick={() =>
                        header.column.toggleSorting(header.column.getIsSorted() === 'asc')
                      }
                      active={header.column.getIsSorted() !== false}
                      direction={header.column.getIsSorted() || undefined}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </S.SortableCell>
                  ) : (
                    <S.Cell align={header.column.columnDef.meta?.align} key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </S.Cell>
                  )
                })}
              </S.TableRow>
            ))}
          </S.TableHead>
          <S.TableBody>
            {table.getRowModel().rows.map(row => (
              <S.TableRow key={row.id} onClick={() => onRowClicked?.(row.getValue('clientId'))}>
                {row.getVisibleCells().map(cell => (
                  <S.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.Cell>
                ))}
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </S.TableContainer>
    </S.Container>
  )
}

const StylableClientTable = createStylableComponent(S, ClientTable)

export { StylableClientTable as ClientTable }
export type { ClientTableProps }
