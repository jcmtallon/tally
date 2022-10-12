import styled from 'styled-components'
import { bg, fg, typo } from 'theme'
import { radius } from 'theme/borderRadius/borderRadius'

const Icon = styled.div``

const Label = styled.div`
  ${typo(t => t.body.base)};
  padding-left: 12px;
`

const Tag = styled.div``

const NavLink = styled.a`
  ${radius(r => r.xxl)};
  ${fg(f => f.neutral.muted)};
  display: flex;

  align-items: center;
  padding: 6px 14px;

  :hover {
    ${fg(f => f.neutral.muted)};
    ${bg(b => b.highlight.muted)};
  }

  &:focus-visible {
    ${fg(f => f.neutral.muted)};
    --outline-offset: 0px;
  }

  &.active,
  a.active > & {
    ${fg(f => f.primary.muted)};
    ${bg(b => b.primary.muted)};
  }
`

export { NavLink, Label, Icon, Tag }
