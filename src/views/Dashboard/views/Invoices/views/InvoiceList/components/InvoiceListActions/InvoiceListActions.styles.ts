import { Button as BaseButton } from 'components'
import styled from 'styled-components'
import { fg } from 'theme'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Metrics = styled.div`
  display: flex;
  justify-content: start;
  column-gap: 10px;
  align-items: center;
  ${fg(f => f.neutral.muted)};
`

const Actions = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 10px;
  align-items: center;
`

const Button = styled(BaseButton).attrs({ color: 'highlight', size: 'regular' })``

export { Container, Metrics, Actions, Button }
