import styled from 'styled-components'
import { DebounceInput, Field as BaseField } from 'components'

const Container = styled.div`
  display: flex;
  column-gap: 10px;
`

const Field = styled(BaseField).attrs({ rounded: true })``

const DebounceSearchInput = styled(DebounceInput)`
  min-width: 600px;
`

export { Container, Field, DebounceSearchInput }
