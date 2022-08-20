import { FormConfig, yup } from 'features/form'
import { useMemo } from 'react'

interface ClientFormValues {
  name: string
  mail: string
  taxId: string
  phone: string
  street: string
  houseNumber: string
  postalCode: string
  city: string
}

type ClientFormConfig = FormConfig<ClientFormValues>

// TODO: types are not getting inferred correctly.
function useClientFormValidationScheme() {
  const validationSchema = useMemo(
    () =>
      yup.object<ClientFormValues>({
        name: yup.string().defined(),
        mail: yup.string().email('Wrong e-mail, baby!').defined(),
        taxId: yup.string().defined(),
        phone: yup.string().length(7, 'too short, babe!').required(),
        street: yup.string().defined(),
        houseNumber: yup.string().defined(),
        postalCode: yup.string().defined(),
        city: yup.string().defined(),
      }),
    [],
  )

  return validationSchema
}

function useClientFormConfig(config: Partial<ClientFormConfig> = {}): ClientFormConfig {
  const validationSchema = useClientFormValidationScheme()

  const initialValues = {
    name: '',
    mail: '',
    taxId: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
  }

  return {
    validationSchema,
    onSubmit: values => {
      console.log(values)
    },
    ...config,
    initialValues: { ...initialValues, ...config.initialValues },
  }
}

export { useClientFormConfig }
export type { ClientFormValues, ClientFormConfig }
