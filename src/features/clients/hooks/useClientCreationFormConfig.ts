import { clients as apiClients, CLIENT_TYPE } from 'services'
import {
  useClientFormConfig,
  ClientFormConfig,
  ClientFormInitialConfig,
  ClientFormValues,
} from './useClientFormConfig'

type ClientCreationFormValues = ClientFormValues
type ClientCreationFormInitialConfig = ClientFormInitialConfig
type ClientCreationFormConfig = ClientFormConfig

function useClientCreationFormConfig(config: ClientCreationFormInitialConfig = {}): ClientFormConfig {
  const formConfig = useClientFormConfig({
    onSubmit: async values => {
      await apiClients.add({
        type: values.type === CLIENT_TYPE.INDIVIDUAL ? CLIENT_TYPE.INDIVIDUAL : CLIENT_TYPE.COMPANY,
        name: values.name,
        taxId: values.taxId,
        email: values.mail,
        phone: values.phone,
        notes: values.notes,
      })
    },
    ...config,
  })

  return formConfig
}

export { useClientCreationFormConfig }
export type { ClientCreationFormValues, ClientCreationFormInitialConfig, ClientCreationFormConfig }
