import { clients as apiClients, Client, CLIENT_TYPE } from 'services'
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
  const { clientType, name, taxId, address, email, notes, phone } = client
  return {
    type: clientType,
    name,
    taxId,
    city: address.city,
    mail: email,
    notes,
    phone,
    postalCode: address.postalCode,
    street: address.street,
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
        type: values.type === CLIENT_TYPE.INDIVIDUAL ? CLIENT_TYPE.INDIVIDUAL : CLIENT_TYPE.COMPANY,
        taxId: values.taxId,
        email: values.mail,
        phone: values.phone,
        address: {
          street: values.street,
          postalCode: values.postalCode,
          city: values.city,
        },
        notes: values.notes,
      })
    },
    ...config,
    initialValues,
  })

  return formConfig
}

export { useClientUpdateFormConfig }
export type { ClientUpdateFormValues, ClientUpdateFormInitialConfig, ClientUpdateFormConfig }
