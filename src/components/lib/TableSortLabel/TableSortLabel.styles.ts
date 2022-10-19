import styled, { css } from 'styled-components'
import { fg, pickColor, radius } from 'theme'
import { IconSortArrowDown } from '../icons'

const Span = styled.span<{ active: boolean }>`
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  ${radius(r => r.xs)};

  :focus-visible {
    ${fg(f => f.primary.default)};
    outline: 2px solid ${pickColor(c => c.stroke.primary.default)};
    outline-offset: 4px;
  }

  :hover {
    // Show inner icon on hover if span is not in active state.
    & svg {
      opacity: 0.5;
    }
  }

  ${({ active }) =>
    active &&
    css`
      ${fg(f => f.neutral.default)};

      && svg {
        // Completely display icon when active.
        opacity: 1;
      }
    `}
`

const ArrowIcon = styled(IconSortArrowDown)<{ direction: 'asc' | 'desc' }>`
  //Hidden by default.
  opacity: 0;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: ${({ direction }) => (direction === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)')};
`

export { Span, ArrowIcon }
