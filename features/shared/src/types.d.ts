// src/types.d.ts or similar
import 'styled-components'
import type { CustomTheme } from '@libraries/ui' // Your custom theme object type

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
