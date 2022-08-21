import React, { ReactNode } from 'react'
import { createStylableComponent } from 'utils'
import { useField } from 'formik'
import * as S from './FormField.styles'

interface FormFieldProps {
  id: string
  label: string
  className?: string
  children: ReactNode

  // TODO: required
  // TODO: helper text
}

function FormField(props: FormFieldProps) {
  const { id, label, children, className } = props

  const [field, meta] = useField(id)

  // TODO: improve this
  const error = meta.touched ? meta.error : undefined

  const renderInput = () => {
    if (!React.isValidElement(children)) throw Error('FormField received an invalid Input child component.')
    const child = React.Children.only(children)
    const enhancedProps = {
      ...field,
      ...child.props,
    }
    return React.cloneElement(child, enhancedProps)
  }

  return (
    <S.Field id={id} label={label} className={className} error={error}>
      {renderInput()}
    </S.Field>
  )
}

const StylableFormField = createStylableComponent(S, FormField)

export { StylableFormField as FormField }
export type { FormFieldProps }
