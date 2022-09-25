import styled, { css } from 'styled-components'
import { fg, typo } from 'theme'
import { Button } from 'components'
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

const ClientList = styled(BaseClientList)`
  ${ContentSection}
`

export { Container, TopRow, Header, CreateClientButton, ClientList }
