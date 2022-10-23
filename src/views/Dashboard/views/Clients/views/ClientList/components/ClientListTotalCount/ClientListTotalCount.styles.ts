import styled from 'styled-components'
import { fg, typo } from 'theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  ${fg(f => f.neutral.muted)};
  ${typo(t => t.body.base)};
`

const Counter = styled.div`
  ${typo(t => t.body.lg.strong)};
`

export { Wrapper, Counter }
