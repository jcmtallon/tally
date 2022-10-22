import styled from 'styled-components'
import { pickColor } from 'theme'
import { Checkbox as BaseCheckbox } from '../Checkbox'
import { TableCell } from '../TableCell'

const Cell = styled(TableCell)`
  // Width 0 allows some sort of shrinking behavior in the cell element,
  // which usually does not support such behaviour unless you change the
  // type of display, something we don't want to know due to other side
  // effects.
  width: 0;
  cursor: pointer;

  &:hover svg {
    color: ${pickColor(c => c.specific.activable.neutral.hover)};
  }
`

const Checkbox = styled(BaseCheckbox)``

export { Cell, Checkbox }
