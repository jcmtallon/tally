import { Button as BaseButton } from 'components'
import styled from 'styled-components'

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filters = styled.div`
  display: grid;
  flex: 1;
  grid-column-gap: 14px;
  grid-template-columns: auto auto auto auto auto auto;
`

const ActionButtonWrapper = styled.div`
  display: grid;
  padding-left: 24px;
  grid-column-gap: 8px;
  grid-template-columns: auto auto;
`

const Button = styled(BaseButton)``

const DivisionSelect = styled.select``

const EmptyOption = styled.option``

export { Button, EmptyOption, FilterRow, Filters, ActionButtonWrapper, DivisionSelect }
