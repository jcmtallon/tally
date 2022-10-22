import React, { forwardRef, InputHTMLAttributes, Ref } from 'react'
import * as S from './Checkbox.styles'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** If `true`, the component appears indeterminate. */
  indeterminate?: boolean

  /** The text content of the label element. */
  label?: string

  /** The helper text content. */
  helperText?: string
}

function Checkbox(props: CheckboxProps, ref: Ref<HTMLInputElement>) {
  const { className, style, label, helperText, ...otherProps } = props
  const { indeterminate, defaultChecked, checked = defaultChecked, disabled } = otherProps

  const renderIcon = () => {
    if (checked) return <S.CheckedIcon />
    if (!checked && disabled) return <S.DisabledBlankIcon />

    return <S.BlankIcon />
  }

  if (label || helperText)
    return (
      <S.Wrapper className={className} style={style} ref={ref} disabled={disabled}>
        <S.Control>
          <S.CheckboxInput
            type="checkbox"
            data-indeterminate={indeterminate}
            aria-checked={indeterminate ? 'mixed' : checked}
            {...otherProps}
          />
          {renderIcon()}
        </S.Control>
        <S.LabelSectionWrapper>
          <S.Label htmlFor={otherProps.id}>{label}</S.Label>
          {helperText && <S.HelperText disabled={otherProps.disabled}>{helperText}</S.HelperText>}
        </S.LabelSectionWrapper>
      </S.Wrapper>
    )

  // If no label or helperText is passed, we rather displaying only the checkbox element without
  // any wrapping or flex behavior on it (it makes the Checkbox positioning behavior more
  // predictable when used in edge cases, like inside a TableCell component or similar.)
  return (
    <S.Control className={className} style={style} ref={ref}>
      <S.CheckboxInput
        type="checkbox"
        data-indeterminate={indeterminate}
        aria-checked={indeterminate ? 'mixed' : checked}
        {...otherProps}
      />
      {renderIcon()}
    </S.Control>
  )
}

const forwardRefCheckbox = forwardRef(Checkbox)

export { forwardRefCheckbox as Checkbox }
export type { CheckboxProps }
