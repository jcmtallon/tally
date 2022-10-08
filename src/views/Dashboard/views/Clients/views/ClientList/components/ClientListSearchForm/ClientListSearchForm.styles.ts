import styled from 'styled-components'
import { DebounceInput, Field as BaseField, Button as BaseButton } from 'components'

const Container = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-end;
`

const Field = styled(BaseField).attrs({ rounded: true })``

const DebounceSearchInput = styled(DebounceInput)`
  min-width: 600px;
`

const Button = styled(BaseButton).attrs({ color: 'highlight' })`
  height: 40px;
`

export { Container, Field, DebounceSearchInput, Button }
