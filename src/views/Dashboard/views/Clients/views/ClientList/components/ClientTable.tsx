import React, { HTMLAttributes, useMemo } from 'react'
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

// TODO: extend container props?
interface ClientTableProps extends HTMLAttributes<HTMLDivElement> {
  clients?: Client[]
  className?: string
  onRowClicked?: (clientId: Client['clientId']) => void
  onCheckboxClicked?: (clientId: Client['clientId']) => void
}

// Opinions:
// Extremely convenient and easy to add complex logic.
// Feels a little bit countercurrent to the way we build components.
// I had to enable { allowAsProps: true } in eslint rules.
// Passing align as meta (lack of flexibility?)
// Pagination under table model?

function ClientTable(props: ClientTableProps) {
  const { clients = [], onRowClicked, ...otherProps } = props

  const [sorting, setSorting] = React.useState<SortingState>([{ id: 'name', desc: true }])

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

  const table = useReactTable({
    data: clients,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
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
                      onSortLabelClick={header.column.getToggleSortingHandler()}
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
      <S.Pagination rowCount={100} page={0} rowsPerPage={10} />
    </S.Container>
  )
}

const StylableClientTable = createStylableComponent(S, ClientTable)

export { StylableClientTable as ClientTable }
export type { ClientTableProps }

/* <S.TableContainer {...otherProps}>
<S.Table stickyHeader aria-label="Clients Table">
  <S.TableHead>
    <S.TableRow>
      <S.Cell align="center">
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
      </S.SortableCell>
      <S.Cell>Teléfono</S.Cell>
      <S.Cell>Facturas</S.Cell>
      <S.Cell align="right">Creado</S.Cell>
    </S.TableRow>
  </S.TableHead>
  <S.TableBody>
    {clients.map((client, index) => {
      const isItemSelected = isSelected(client.clientId)
      const labelId = `enhanced-table-checkbox-${index}`

      return (
        <S.TableRow key={client.clientId} onClick={() => onRowClicked?.(client.clientId)}>
          <S.Cell align="center">
            <S.Checkbox
              aria-labelledby={labelId}
              checked={isItemSelected}
              onChange={() => handleCheckboxChange(client.clientId)}
              onClick={e => e.stopPropagation()}
            />
          </S.Cell>
          <S.Cell>{client.name}</S.Cell>
          <S.Cell>{client.phone}</S.Cell>
          <S.Cell>{client.email}</S.Cell>
          <S.Cell>Some long address</S.Cell>
          <S.Cell align="right">{client.notes}</S.Cell>
        </S.TableRow>
      )
    })}
  </S.TableBody>
</S.Table>
</S.TableContainer> */
