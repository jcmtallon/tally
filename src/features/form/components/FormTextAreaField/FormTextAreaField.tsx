import React from 'react'
import { createStylableComponent } from 'utils'
import { useField } from 'formik'
import { TextAreaProps } from 'components'
import * as S from './FormTextAreaField.styles'

interface FormTextAreaFieldProps extends TextAreaProps {
  id: string
  label: string
  // TODO: required
  // TODO: helper text
}

// TODO: Can we use same wrapper with all field components in this feature?
function FormTextAreaField(props: FormTextAreaFieldProps) {
  const { id, label, className, ...inputProps } = props

  const [field, meta] = useField(id)

  // TODO: improve this
  const error = meta.touched ? meta.error : undefined

  return (
    <S.Field id={id} label={label} className={className} error={error}>
      <S.TextArea {...field} {...inputProps} />
    </S.Field>
  )
}

const StylableFormTextAreaField = createStylableComponent(S, FormTextAreaField)

export { StylableFormTextAreaField as FormTextAreaField }
export type { FormTextAreaFieldProps }
