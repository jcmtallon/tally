import { Button as BaseButton, Field as BaseField, Input } from 'components'
import styled from 'styled-components'

const FilterRow = styled.div`
  display: flex;
`

const Filters = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
  align-items: flex-end;
`

const Field = styled(BaseField).attrs({ rounded: true })``

const SearchInput = styled(Input)`
  min-width: 600px;
`

const Button = styled(BaseButton).attrs({ size: 'large', color: 'highlight' })``

export { Button, FilterRow, Filters, SearchInput, Field }
