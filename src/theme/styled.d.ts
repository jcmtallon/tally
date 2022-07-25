import 'styled-components'
import { AthlosTheme } from './theme'

declare module 'styled-components' {
  // empty brackets are necessary for 'extends' to work.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AthlosTheme {}
}
