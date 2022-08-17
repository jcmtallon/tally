import React from 'react'
import * as S from './Select.styles'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  forwardedRef?: React.Ref<HTMLSelectElement>
}

function ForwardedRefSelect(props: SelectProps) {
  const { forwardedRef, ...otherProps } = props

  return <S.Select ref={forwardedRef} {...otherProps} />
}

const Select = React.forwardRef((props: SelectProps, ref: React.Ref<HTMLSelectElement>) => (
  <ForwardedRefSelect {...props} forwardedRef={ref} />
))

export { Select }
export type { SelectProps }
