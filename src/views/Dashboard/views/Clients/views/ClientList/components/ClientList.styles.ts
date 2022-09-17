import styled, { css } from 'styled-components'
import { fg, typo } from 'theme'
import { Button } from 'components'
import { ClientListSearchForm } from './ClientListSearchForm'
import { ClientTable } from './ClientTable'
import { ClientListPagination } from './ClientListPagination/ClientListPagination'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentSection = css`
  max-width: 1200px;
  width: 100%;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;

  ${ContentSection}
`

const Header = styled.h1`
  font-weight: bold;
  padding: 10px;
  ${fg(f => f.neutral.muted)};
  ${typo(t => t.header.h4)};
`

const CreateClientButton = styled(Button).attrs({ size: 'large' })``

const SearchForm = styled(ClientListSearchForm)`
  ${ContentSection}

  padding: 10px;
`

const TableActionsBar = styled.div`
  ${ContentSection}

  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0px;
`

const TableStatsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  ${fg(f => f.neutral.mutedPlus)};
`

const TableActionsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 10px;

  ${ContentSection}
`

const TableActionButton = styled(Button).attrs({ color: 'highlight', size: 'medium' })``

const TablePagination = styled(ClientListPagination)``

const Table = styled(ClientTable)``

export {
  Container,
  CreateClientButton,
  Header,
  SearchForm,
  TableActionButton,
  TableActionsBar,
  TableActionsWrapper,
  TableStatsWrapper,
  TableWrapper,
  TablePagination,
  Table,
  TopRow,
}
