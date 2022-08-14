import { Button } from 'components'
import styled from 'styled-components'
import { canvas, fg, typo } from 'theme'
import { ClientListSearchForm } from './ClientListSearchForm'

const Wrapper = styled.div``

const Header = styled.h1`
  font-weight: bold;
  padding: 10px;
  ${fg(f => f.neutral.muted)};
  ${typo(t => t.header.h4)};
`

const CreateClientButton = styled(Button).attrs({ size: 'large' })``

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const SearchForm = styled(ClientListSearchForm)`
  padding: 10px;
`

const TableWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
`

const Table = styled.table`
  width: 100%;
  border: 1px solid gray;
  border-radius: 12px;
  border: none;
  ${canvas()};
`

const Cell = styled.td`
  text-align: center;
  padding: 6px;
`

export { Header, Wrapper, TopRow, TableWrapper, Table, Cell, SearchForm, CreateClientButton }
