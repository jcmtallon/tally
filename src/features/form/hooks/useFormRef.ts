import { FormikProps } from 'formik'
import { useRef } from 'react'
import { FormValues } from '../types'

function useFormRef<V extends FormValues>() {
  const formRef = useRef<FormikProps<V>>(null)

  return { formRef, form: formRef.current } as const
}

export { useFormRef }
