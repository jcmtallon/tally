import React, { MouseEventHandler, useCallback } from 'react'
import { createStylableComponent } from 'utils'
import { Client } from 'services'
import * as S from './ClientTable.styles'

interface ClientTableProps {
  clients?: Client[]
  className?: string
  onRowClicked?: (clientId: Client['clientId']) => void
  onCheckboxClicked?: (clientId: Client['clientId']) => void
}

function ClientTable(props: ClientTableProps) {
  const { clients = [], onRowClicked, ...otherProps } = props

  const handleCheckboxClick = useCallback<MouseEventHandler<HTMLInputElement>>(ev => {
    ev.stopPropagation()
    ev.preventDefault()
  }, [])

  return (
    <S.TableContainer {...otherProps}>
      <S.Table stickyHeader aria-label="Clients Table">
        <S.TableHead>
          <S.TableRow>
            <S.Cell align="center">
              <S.Checkbox onChange={() => {}} onClick={handleCheckboxClick} />
            </S.Cell>
            <S.Cell>
              <S.SortLabel>Nombre</S.SortLabel>
            </S.Cell>
            <S.Cell>E-mail</S.Cell>
            <S.Cell>Teléfono</S.Cell>
            <S.Cell>Facturas</S.Cell>
            <S.Cell align="right">Creado</S.Cell>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {clients.map(client => (
            <S.TableRow key={client.clientId} onClick={() => onRowClicked?.(client.clientId)}>
              <S.Cell align="center">
                <S.Checkbox onChange={() => {}} onClick={handleCheckboxClick} />
              </S.Cell>
              <S.Cell>{client.name}</S.Cell>
              <S.Cell>{client.phone}</S.Cell>
              <S.Cell>{client.email}</S.Cell>
              <S.Cell>Some long address</S.Cell>
              <S.Cell align="right">{client.notes}</S.Cell>
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
