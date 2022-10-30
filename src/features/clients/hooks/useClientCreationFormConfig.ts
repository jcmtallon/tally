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
  const formConfig = useClientFormConfig({})

  return formConfig
}

export { useClientCreationFormConfig }
export type { ClientCreationFormValues, ClientCreationFormInitialConfig, ClientCreationFormConfig }
