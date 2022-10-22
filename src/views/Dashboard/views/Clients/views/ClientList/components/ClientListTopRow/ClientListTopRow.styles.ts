import styled from 'styled-components'
import { typo } from 'theme'
import { Button, IconPlusSm, IconBox as BaseIconBox, IconPeople } from 'components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Header = styled.h1`
  user-select: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  color: #0f6fde;
  ${typo(t => t.header.h4)};
`

const IconBox = styled(BaseIconBox)``

const ClientIcon = styled(IconPeople)``

const CreateClientButton = styled(Button).attrs({ size: 'regular' })``

const PlusIcon = styled(IconPlusSm)``

export { Wrapper, Header, CreateClientButton, ClientIcon, PlusIcon, IconBox }
