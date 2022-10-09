import styled from 'styled-components'
import { canvas } from 'theme'

const Table = styled.table<{ isSticky: boolean }>`
  width: 100%;
  border: none;
  text-align: left;

  // Separate style necessary for the header bottom border to stick to the header as well.
  border-collapse: ${({ isSticky }) => (isSticky ? 'separate' : 'collapse')};
  border-spacing: 0px;
  ${canvas()};
`

export { Table }
