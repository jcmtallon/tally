import styled from 'styled-components'
import { DebounceInput, Field as BaseField, IconButton as BaseIconButton, IconXMark } from 'components'

const Container = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-end;
`

const Field = styled(BaseField).attrs({ rounded: true })`
  min-width: 600px;
`

const DebounceSearchInput = styled(DebounceInput)``

const IconButton = styled(BaseIconButton).attrs({ variant: 'ghost', size: 'small', color: 'neutral' })`
  // So the focus outline looks rounded.
  border-radius: 20px;
`

const XMarkIcon = styled(IconXMark)``

export { Container, Field, DebounceSearchInput, IconButton, XMarkIcon }
