import styled from 'styled-components'
import { Select } from '../Select'
import { TablePaginationActions } from './TablePaginationActions'

const Container = styled.div`
  display: flex;
  justify-content: end;
`

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`

const RowsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

const RowsPerPageLabel = styled.p`
  white-space: nowrap;
`

const RowsPerPageSelect = styled(Select)`
  width: fit-content;
`

const DisplayedRowsLabel = styled.p`
  white-space: nowrap;
`

const Actions = styled(TablePaginationActions)``

export {
  Actions,
  Container,
  DisplayedRowsLabel,
  RowsPerPageContainer,
  RowsPerPageLabel,
  RowsPerPageSelect,
  Toolbar,
}
