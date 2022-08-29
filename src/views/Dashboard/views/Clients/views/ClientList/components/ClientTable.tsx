import React, { ChangeEvent, useState } from 'react'
import { createStylableComponent } from 'utils'
import { Client } from 'services'
import * as S from './ClientTable.styles'

type Order = 'asc' | 'desc'
type OrderBy = 'name' | 'email'

interface ClientTableProps {
  clients?: Client[]
  className?: string
  onRowClicked?: (clientId: Client['clientId']) => void
  onCheckboxClicked?: (clientId: Client['clientId']) => void
}

function ClientTable(props: ClientTableProps) {
  const { clients = [], onRowClicked, ...otherProps } = props

  // SORTING =========
  // Hook? URL param sync?
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<OrderBy>('name')

  const handleSortClick = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }
  // SORTING ==========

  // SELECTING =========

  const [selected, setSelected] = useState<readonly string[]>([])

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = clients.map(n => n.clientId)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleCheckboxChange = (id: string) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  // SELECTING =========

  // Pass array of header objects and render and enhanced header with that ?
  // Use context to pass props to sortlabel?

  return (
    <S.TableContainer {...otherProps}>
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
            {/* Combine Cell and SortLabel into SortableHeaderCell? */}
            <S.Cell>
              <S.SortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleSortClick('name')}>
                Nombre
              </S.SortLabel>
            </S.Cell>
            <S.Cell>
              <S.SortLabel
                active={orderBy === 'email'}
                direction={orderBy === 'email' ? order : 'asc'}
                onClick={() => handleSortClick('email')}>
                E-mail
              </S.SortLabel>
            </S.Cell>
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
    </S.TableContainer>
  )
}

const StylableClientTable = createStylableComponent(S, ClientTable)

export { StylableClientTable as ClientTable }
export type { ClientTableProps }

// order
// orderBy

// numSelected={selected.length}
// onSelectAllClick={handleSelectAllClick}
// onRequestSort={handleRequestSort}
// rowCount={rows.length}
