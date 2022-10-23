import { ActivityIndicator } from 'components'
import styled, { css } from 'styled-components'
import { fg } from 'theme'
import { ClientList as BaseClientList } from '../ClientList'
import { ClientListTopRow } from '../ClientListTopRow/ClientListTopRow'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const ContentSection = css`
  max-width: 1600px;
  width: 100%;
`

const TopRow = styled(ClientListTopRow)`
  padding: 20px 20px 10px;

  ${ContentSection}
`

const Backdrop = styled(ActivityIndicator)`
  ${fg(f => f.primary.default)};
`

const ClientList = styled(BaseClientList)`
  ${ContentSection}
`

export { Container, TopRow, ClientList, Backdrop }
