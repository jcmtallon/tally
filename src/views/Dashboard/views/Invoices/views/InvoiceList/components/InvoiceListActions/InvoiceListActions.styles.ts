import { Button as BaseButton } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Metrics = styled.div`
  display: flex;
  justify-content: start;
  column-gap: 10px;
`

const Actions = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 10px;
`

const Button = styled(BaseButton).attrs({ color: 'highlight', size: 'medium' })``

export { Container, Metrics, Actions, Button }
