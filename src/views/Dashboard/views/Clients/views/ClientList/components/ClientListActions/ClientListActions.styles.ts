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
  min-height: 40px;
`

const SelectedLabelWrapper = styled.div``

const Button = styled(BaseButton).attrs({ color: 'highlight', size: 'regular' })``

export { Container, Actions, Button, SelectedLabelWrapper }
