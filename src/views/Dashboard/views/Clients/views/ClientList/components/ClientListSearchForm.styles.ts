import { Button as BaseButton, Input } from 'components'
import styled from 'styled-components'

const FilterRow = styled.div`
  display: flex;
`

const Filters = styled.div`
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
`

const SearchInput = styled(Input)`
  min-width: 600px;
`

const Button = styled(BaseButton).attrs({ size: 'large', color: 'highlight' })``

export { Button, FilterRow, Filters, SearchInput }
