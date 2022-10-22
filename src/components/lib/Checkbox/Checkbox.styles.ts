import styled, { css } from 'styled-components'
import { pickColor, typo } from 'theme'
import { IconCheckmarkSquareFill, IconMinusSquareFill, IconSquare, IconSquareFill } from '../icons'

const CheckboxInput = styled.input<{ disabled?: boolean | undefined }>`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer ')};
`

const Control = styled.span`
  display: inline-flex;
  position: relative;
  align-items: center;
  // Important for inner icon and input to show perfectly aligned. Specially important
  // when used inside a TableCell component.
  vertical-align: middle;
`

const icon = css`
  font-size: 1.25rem;
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  input[type='checkbox'] + & {
    color: ${pickColor(c => c.specific.activable.neutral.quiet)};
  }

  input[type='checkbox']:hover + & {
    color: ${pickColor(c => c.specific.activable.neutral.hover)};
  }

  input[type='checkbox']:checked + &,
  input[type='checkbox']:indeterminate + &,
  input[type='checkbox'][data-indeterminate='true'] + & {
    color: ${pickColor(c => c.specific.activable.primary.quiet)};
  }

  input[type='checkbox']:disabled + &,
  input[type='checkbox']:disabled:checked + & {
    color: ${pickColor(c => c.specific.activable.primary.disable)};
  }

  input[type='checkbox']:focus-visible + & {
    // NOTE: We are NOT using pickFocusStroke util here because it renders
    // a line very close to the actual circle, making it look really weird
    outline-offset: 0px;
    border-radius: 4px;
    outline: 2px ${pickColor(c => c.specific.focusOutline)} solid;
  }
`

const CheckedIcon = styled(IconCheckmarkSquareFill)`
  ${icon}
`

const BlankIcon = styled(IconSquare)`
  ${icon}
`

const DisabledBlankIcon = styled(IconSquareFill)`
  ${icon}
`

const IndeterminateIcon = styled(IconMinusSquareFill)`
  ${icon}
`

const LabelSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${typo(t => t.body.base)}
`

const Label = styled.label<{ disabled?: boolean | undefined }>`
  user-select: none;
  transition: color 100ms linear;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer ')};
  color: ${({ disabled }) => pickColor(c => (disabled ? c.specific.disabledText : c.fg.neutral.default))};
`

const HelperText = styled.span<{ disabled?: boolean | undefined }>`
  transition: color 100ms linear;
`

// color: ${({ disabled }) => pickColor(c => (disabled ? c.specific.disabledText : c.specific.placeholder))};

const Wrapper = styled.div<{ disabled?: boolean | undefined }>`
  display: flex;
  flex-direction: row;
  align-items: start;
  column-gap: '16px';
`

export {
  BlankIcon,
  CheckboxInput,
  CheckedIcon,
  Control,
  DisabledBlankIcon,
  HelperText,
  IndeterminateIcon,
  Label,
  LabelSectionWrapper,
  Wrapper,
}
