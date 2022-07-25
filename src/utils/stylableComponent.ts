import type { ComponentType as ReactComponentType } from 'react'
import styled, { isStyledComponent } from 'styled-components'

type StyledChildren = Record<string, ReactComponentType>

type StylableComponentType<P, S extends StyledChildren> = ReactComponentType<P> & { S: S }

function createStylableComponent<S extends StyledChildren, P>(
  styledChildren: S,
  component: ReactComponentType<P>,
): StylableComponentType<P, S> {
  const stylableComponent = (
    isStyledComponent(component) ? component : styled(component)``
  ) as ReactComponentType<P>

  Object.defineProperty(stylableComponent, 'S', { value: styledChildren })

  return stylableComponent as StylableComponentType<P, S>
}

export { createStylableComponent }
