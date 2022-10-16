import styled, { css } from 'styled-components'
import { fg, typo } from 'theme'
import { Button, IconPlusSm, IconBox as BaseIconBox, IconPeople } from 'components'
import { ClientList as BaseClientList } from '../ClientList'

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
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px 10px;

  ${ContentSection}
`
const Header = styled.h1`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  ${fg(f => f.neutral.default)};
  ${typo(t => t.header.h4)};
`

const IconBox = styled(BaseIconBox)``

const ClientIcon = styled(IconPeople)``

const CreateClientButton = styled(Button).attrs({ size: 'regular' })``

const ClientList = styled(BaseClientList)`
  ${ContentSection}
`

const PlusIcon = styled(IconPlusSm)``

export { Container, TopRow, Header, CreateClientButton, ClientIcon, ClientList, PlusIcon, IconBox }
