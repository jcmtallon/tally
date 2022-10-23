import { IconInvoice } from 'components'
import styled from 'styled-components'
import { fg } from 'theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

const Icon = styled(IconInvoice)`
  ${fg(f => f.neutral.muted)};
`

export { Wrapper, Icon }
