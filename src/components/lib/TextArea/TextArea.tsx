import React from 'react'
import * as S from './TextArea.styles'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardedRef?: React.Ref<HTMLTextAreaElement>
  rounded?: boolean
  error?: boolean
}

function ForwardedRefTextArea(props: TextAreaProps) {
  const { forwardedRef, error = undefined, rounded = false, ...otherProps } = props

  return <S.TextArea ref={forwardedRef} showError={!!error} rounded={rounded} {...otherProps} />
}

const TextArea = React.forwardRef((props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => (
  <ForwardedRefTextArea {...props} forwardedRef={ref} />
))

export { TextArea }
export type { TextAreaProps }
