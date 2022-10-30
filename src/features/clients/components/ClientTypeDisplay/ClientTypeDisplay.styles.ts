import { Chip as BaseChip, IconPerson, IconWallet } from 'components'
import { ClientType } from 'services'
import styled from 'styled-components'
import { fg, Theme } from 'theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`

const getColor = (theme: Theme): Record<ClientType, string> => ({
  INDIVIDUAL: '#47a6ef', // primaryMuted
  COMPANY: theme.palette.red[50],
})

const Chip = styled(BaseChip)<{ clientType: ClientType }>`
  background-color: ${props => getColor(props.theme)[props.clientType]};
  ${fg(f => f.neutral.onEmphasis)};
  padding: 1px 4.5px;
`

const Person = styled(IconPerson)`
  font-size: 0.8125rem;
`
const Wallet = styled(IconWallet)`
  font-size: 0.8125rem;
`

export { Wrapper, Chip, Person, Wallet }
