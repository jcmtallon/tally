import { PropsWithChildren, ComponentType, ReactElement } from 'react'

function pipeProviders(
  ...components: Array<(props: PropsWithChildren<unknown>) => ReactElement>
): ComponentType<PropsWithChildren<unknown>> {
  return props => components.reduceRight((children, fn) => fn({ children }), props.children as ReactElement)
}

export { pipeProviders }
