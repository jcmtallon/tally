import styled from 'styled-components'
import { typo } from 'theme'

const Button = styled.button`
  position: relative;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  cursor: pointer;
  user-select: none;
  appearance: none;

  height: fit-content;

  ${typo(t => t.body.base)}

  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`

export { Button }
