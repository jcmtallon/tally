import styled from 'styled-components'
import { bg, fg } from 'theme'
import { InstallHomeLogo } from './InstallHomeLogo'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 12px 14px;

  ${bg(b => b.neutral.emphasis)};
  ${fg(f => f.neutral.onEmphasis)};
`

const Logo = styled(InstallHomeLogo)``

const SessionControls = styled.div`
  display: flex;
  align-items: center;
`

export { Wrapper, Logo, SessionControls }
