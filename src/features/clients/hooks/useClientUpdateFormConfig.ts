import { Client } from 'services'
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
    // taxId: client.
  }
}

function useClientUpdateFormConfig(
  client: Client,
  config: ClientUpdateFormInitialConfig = {},
): ClientFormConfig {
  const initialValues = useClientUpdateFormInitialValues(client)

  const formConfig = useClientFormConfig({
    ...config,
    initialValues,
  })

  return formConfig
}

export { useClientUpdateFormConfig }
export type { ClientUpdateFormValues, ClientUpdateFormInitialConfig, ClientUpdateFormConfig }
