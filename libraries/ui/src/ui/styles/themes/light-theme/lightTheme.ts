import { CustomTheme } from '../themes.types'

export const lightTheme: CustomTheme = {
  name: 'light',
  colors: {
    primary: '#2ee4ea', // azul vibrante
    secondary: '#1f91ab',
  },
  background: {
    primary: '#ffffff', // fondo principal blanco
  },
  foreground: {
    primary: '#f8f9fa', // gris muy claro (cards, headers, etc.)
  },
  text: {
    primary: '#212529', // negro/gris oscuro legible
  },
}

export type LightTheme = typeof lightTheme
