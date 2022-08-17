import { FormikValues, FormikConfig, FormikErrors } from 'formik'

type FormValues = FormikValues
type FormConfig<V extends FormValues> = FormikConfig<V>
type FormErrors<V extends FormValues> = FormikErrors<V>

export type { FormValues, FormConfig, FormErrors }
