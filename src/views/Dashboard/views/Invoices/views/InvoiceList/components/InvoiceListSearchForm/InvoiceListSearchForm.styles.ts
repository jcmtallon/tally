import styled from 'styled-components'
import { Field as BaseField, Input } from 'components'

const Container = styled.div``

const Field = styled(BaseField).attrs({ rounded: true })``

const SearchInput = styled(Input)`
  min-width: 600px;
`

export { Container, Field, SearchInput }
