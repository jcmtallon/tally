import React from 'react'
import { createStylableComponent } from 'utils'
import { useField } from 'formik'
import { SelectProps } from 'components'
import * as S from './FormSelectField.styles'

interface FormSelectFieldProps extends SelectProps {
  id: string
  label: string
  // TODO: Avoid this repetition
  forwardedRef: React.Ref<HTMLSelectElement>
  // TODO: required
  // TODO: helper text
}

function FormSelectField(props: FormSelectFieldProps) {
  const { id, label, forwardedRef, className, ...inputProps } = props

  const [field, meta] = useField(id)

  // TODO: improve this
  const error = meta.touched ? meta.error : undefined

  return (
    <S.Field id={id} label={label} className={className} error={error}>
      <S.Select {...field} {...inputProps} ref={forwardedRef} />
    </S.Field>
  )
}

const StylableFormSelectField = createStylableComponent(S, FormSelectField)

export { StylableFormSelectField as FormSelectField }
export type { FormSelectFieldProps }
