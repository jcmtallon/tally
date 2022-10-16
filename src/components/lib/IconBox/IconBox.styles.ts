import styled from 'styled-components'
import { pickColor } from 'theme'

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  margin-right: 0.5rem;
  justify-content: center;
  color: ${pickColor(c => c.bg.primary.muted)};
  background-color: ${pickColor(c => c.fg.primary.muted)};
`
export { Wrapper }
