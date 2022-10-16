import styled, { css } from 'styled-components'
import { ClientList as BaseClientList } from '../ClientList'
import { ClientListTopRow } from '../ClientListTopRow/ClientListTopRow'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentSection = css`
  max-width: 1200px;
  width: 100%;
`

const TopRow = styled(ClientListTopRow)`
  padding: 20px 10px 10px;

  ${ContentSection}
`

const ClientList = styled(BaseClientList)`
  ${ContentSection}
`

export { Container, TopRow, ClientList }
