import React from 'react'
import { createStylableComponent } from 'utils'
import { useField } from 'formik'
import { InputProps } from 'components'
import * as S from './FormTextField.styles'

interface FormTextFieldProps extends InputProps {
  id: string
  label: string
  // TODO: required
  // TODO: helper text
}

function FormTextField(props: FormTextFieldProps) {
  const { id, label, className, ...inputProps } = props

  const [field, meta] = useField(id)

  // TODO: improve this
  const error = meta.touched ? meta.error : undefined

  return (
    <S.Field id={id} label={label} className={className} error={error}>
      <S.Input {...field} {...inputProps} />
    </S.Field>
  )
}

const StylableFormTextField = createStylableComponent(S, FormTextField)

export { StylableFormTextField as FormTextField }
export type { FormTextFieldProps }
