import { clients as apiClients, Client } from 'services'
import {
  useClientFormConfig,
  ClientFormConfig,
  ClientFormInitialConfig,
  ClientFormValues,
} from './useClientFormConfig'

type ClientUpdateFormValues = ClientFormValues
type ClientUpdateFormInitialConfig = Omit<ClientFormInitialConfig, 'initialValues'>
type ClientUpdateFormConfig = ClientFormConfig

function useClientUpdateFormInitialValues(client: Client): Partial<ClientFormConfig['initialValues']> {
  return {
    type: client.clientType,
    name: client.name,
    taxId: client.taxId,
  }
}

function useClientUpdateFormConfig(
  client: Client,
  config: ClientUpdateFormInitialConfig = {},
): ClientFormConfig {
  const initialValues = useClientUpdateFormInitialValues(client)

  const formConfig = useClientFormConfig({
    onSubmit: async values => {
      await apiClients.update(client.clientId, {
        name: values.name,
      })
    },
    ...config,
    initialValues,
  })

  return formConfig
}

export { useClientUpdateFormConfig }
export type { ClientUpdateFormValues, ClientUpdateFormInitialConfig, ClientUpdateFormConfig }
