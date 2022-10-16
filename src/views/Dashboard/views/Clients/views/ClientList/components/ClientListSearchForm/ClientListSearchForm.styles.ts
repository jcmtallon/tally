import styled from 'styled-components'
import {
  DebounceInput,
  Field as BaseField,
  IconButton as BaseIconButton,
  IconButtonProps,
  IconXMark,
} from 'components'
import { widenProps } from 'theme'

const Container = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-end;
`

const Field = styled(BaseField).attrs({ rounded: true })`
  min-width: 600px;
`

const DebounceSearchInput = styled(DebounceInput)``

type ClearButtonProps = IconButtonProps & { show: boolean }

const IconButton = styled(BaseIconButton).attrs(
  widenProps<ClearButtonProps>({
    variant: 'ghost',
    size: 'small',
    color: 'neutral',
  }),
)`
  // So the focus outline looks rounded.
  border-radius: 20px;
  transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => (props.show ? 1 : 0)};
`

const XMarkIcon = styled(IconXMark)``

export { Container, Field, DebounceSearchInput, IconButton, XMarkIcon }
