import React from 'react'
import * as S from './Select.styles'

interface SelectOption {
  value: string | number
  label: string
}

// TODO: temp component. Consider using React Select instead.
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  forwardedRef?: React.Ref<HTMLSelectElement>
  rounded?: boolean
  options?: SelectOption[]
}

function ForwardedRefSelect(props: SelectProps) {
  const { forwardedRef, options = [], rounded = false, ...otherProps } = props

  return (
    <S.Select ref={forwardedRef} rounded={rounded} {...otherProps}>
      {options.map(opt => (
        <S.Option key={opt.value} value={opt.value}>
          {opt.label}
        </S.Option>
      ))}
    </S.Select>
  )
}

const Select = React.forwardRef((props: SelectProps, ref: React.Ref<HTMLSelectElement>) => (
  <ForwardedRefSelect {...props} forwardedRef={ref} />
))

export { Select }
export type { SelectProps }
