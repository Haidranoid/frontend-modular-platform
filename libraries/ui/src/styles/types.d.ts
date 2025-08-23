// src/types.d.ts or similar
import 'styled-components';
import { CustomTheme } from './themes'; // Your custom theme object type

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {}
}