import { IconTools } from 'components'
import styled from 'styled-components'
import { fg, typo } from 'theme'

const Wrapper = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  padding-left: 8px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Icon = styled(IconTools)`
  ${fg(f => f.primary.muted)};
  font-size: 1.3rem;
`

const Title = styled.div`
  ${fg(f => f.primary.muted)};
  ${typo(t => t.body.md.strong)};

  line-height: 1.1;
`

const Subtitle = styled.div`
  ${fg(f => f.neutral.mutedPlus)};
  ${typo(t => t.body.xs)};
`

export { Wrapper, TextWrapper, Title, Subtitle, Icon }
