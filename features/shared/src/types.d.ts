import 'styled-components'
import type { CustomTheme } from './styles'

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

export {}
