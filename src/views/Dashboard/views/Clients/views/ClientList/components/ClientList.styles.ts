import styled from 'styled-components'
import { ClientListSearchForm } from './ClientListSearchForm'

const Wrapper = styled.div``

const Header = styled.div`
  font-weight: bold;
  padding: 10px;
`

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
  background-color: white;
`

const Cell = styled.td`
  text-align: center;
  padding: 6px;
`

export { Header, Wrapper, TopRow, TableWrapper, Table, Cell, SearchForm }
