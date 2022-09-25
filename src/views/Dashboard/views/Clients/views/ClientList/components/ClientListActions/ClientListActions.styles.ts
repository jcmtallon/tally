import { Button as BaseButton } from 'components'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: end;
`

const Actions = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 10px;
  align-items: center;
`

const Button = styled(BaseButton).attrs({ color: 'highlight', size: 'medium' })``

export { Container, Actions, Button }
