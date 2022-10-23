import { Chip as BaseChip, IconPerson, IconSuitcase } from 'components'
import { Client } from 'services'
import styled from 'styled-components'
import { fg, Theme } from 'theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`

const getColor = (theme: Theme): Record<Client['clientType'], string> => ({
  individual: '#47a6ef', // primaryMuted
  company: theme.palette.red[55],
})

const Chip = styled(BaseChip)<{ clientType: Client['clientType'] }>`
  background-color: ${props => getColor(props.theme)[props.clientType]};
  ${fg(f => f.neutral.onEmphasis)};
  padding: 1px 4.5px;
`

const Person = styled(IconPerson)`
  font-size: 0.8125rem;
`
const Suitcase = styled(IconSuitcase)`
  font-size: 0.8125rem;
`

export { Wrapper, Chip, Person, Suitcase }
