import React, { RefObject } from 'react'
import { Formik, FormikProps, FormikConfig } from 'formik'
import { FormValues } from '../../types'

interface FormProps<V extends FormValues> extends FormikConfig<V> {
  formRef: RefObject<FormikProps<V>>
}

function Form<V extends FormValues = FormValues>(props: FormProps<V>) {
  const { formRef, ...otherProps } = props
  return <Formik innerRef={formRef} {...otherProps} />
}

export { Form }
export type { FormProps }
