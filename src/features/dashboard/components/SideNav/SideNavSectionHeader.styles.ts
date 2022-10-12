import styled from 'styled-components'
import { fg, typo } from 'theme'

const Wrapper = styled.div`
  ${typo(t => t.body.md.strong)};
  ${fg(f => f.neutral.muted)};
  padding-left: 14px;
  min-height: 24px;
`

export { Wrapper }
