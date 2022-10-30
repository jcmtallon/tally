import { FormConfig, yup } from 'features/form'
import { useMemo } from 'react'
import { clients as apiClients, CLIENT_TYPE, ClientType } from 'services'
import { Merge } from 'type-fest'

interface ClientFormValues {
  type: ClientType
  name: string
  taxId: string
  mail: string
  phone: string
  street: string
  houseNumber: string
  postalCode: string
  city: string
  notes: string
}

type ClientFormConfig = FormConfig<ClientFormValues>

// TODO: types are not getting inferred correctly.
function useClientFormValidationScheme() {
  const validationSchema = useMemo(
    () =>
      yup.object<ClientFormValues>({
        type: yup.string<ClientType>(),
        name: yup.string().defined(),
        mail: yup.string().email('Wrong e-mail, baby!'),
        taxId: yup.string(),
        phone: yup.string(),
        street: yup.string(),
        houseNumber: yup.string(),
        postalCode: yup.string(),
        city: yup.string(),
        notes: yup.string(),
      }),
    [],
  )

  return validationSchema
}

type ClientFormInitialConfig = Merge<
  Partial<ClientFormConfig>,
  {
    initialValues?: Partial<ClientFormConfig['initialValues']>
  }
>

function useClientFormConfig(config: ClientFormInitialConfig = {}): ClientFormConfig {
  const validationSchema = useClientFormValidationScheme()

  const initialValues = {
    type: CLIENT_TYPE.INDIVIDUAL,
    name: '',
    mail: '',
    taxId: '',
    phone: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    notes: '',
  }

  return {
    validationSchema,
    onSubmit: () => undefined,
    ...config,
    initialValues: { ...initialValues, ...config.initialValues },
  }
}

export { useClientFormConfig }
export type { ClientFormValues, ClientFormConfig, ClientFormInitialConfig }
