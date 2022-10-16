import styled from 'styled-components'
import { fg, pickColor } from 'theme'

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  margin-right: 0.5rem;
  justify-content: center;
  ${fg(f => f.primary.muted)};
  // TODO: not sure about this style
  background-color: rgb(229, 243, 253);
  border: 2px solid ${pickColor(c => c.fg.primary.muted)};
`
export { Wrapper }
