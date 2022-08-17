import { FormConfig } from 'features/form'

type ClientFormValues = {
  name: string
  email: string
}

type ClientFormConfig = FormConfig<ClientFormValues>

// TODO: validation schema

function useClientFormConfig(config: Partial<ClientFormConfig> = {}): ClientFormConfig {
  const initialValues = {
    name: '',
    email: '',
  }

  return {
    validate: () => {},
    onSubmit: values => {
      console.log(values)
    },
    ...config,
    initialValues: { ...initialValues, ...config.initialValues },
  }
}

export { useClientFormConfig }
export type { ClientFormValues, ClientFormConfig }
