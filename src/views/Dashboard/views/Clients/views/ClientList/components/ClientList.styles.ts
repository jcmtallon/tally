import { Button, Checkbox as BaseCheckbox } from 'components'
import styled, { css } from 'styled-components'
import { canvas, fg, pickColor, typo } from 'theme'
import { ClientListSearchForm } from './ClientListSearchForm'

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
  padding: 10px;

  ${ContentSection}
`

const TableActionButton = styled(Button).attrs({ color: 'highlight', size: 'medium' })``

const Table = styled.table`
  width: 100%;
  border: 1px solid gray;
  border-radius: 12px;
  border: none;
  ${canvas()};
`

const Thead = styled.thead`
  text-align: center;
  ${fg(f => f.neutral.muted)};
  ${typo(t => t.body.md)};
`

const Th = styled.th`
  padding: 10px;
`

const Cell = styled.td`
  text-align: center;
  padding: 12px;
`

const Tr = styled.tr`
  ${Cell} {
    border-top: 1px solid ${pickColor(s => s.stroke.neutral.muted)};
  }
`

const Checkbox = styled(BaseCheckbox)``

export {
  Cell,
  Checkbox,
  CreateClientButton,
  Header,
  SearchForm,
  Table,
  TableActionButton,
  TableActionsBar,
  TableActionsWrapper,
  TableStatsWrapper,
  TableWrapper,
  Thead,
  Th,
  Tr,
  TopRow,
  Container,
}
