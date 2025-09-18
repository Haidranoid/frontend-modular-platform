import { CustomTheme } from '../themes.types'

export const darkTheme: CustomTheme = {
  name: 'dark',
  colors: {
    primary: '#104a79',
    secondary: '#4dabf7', // azul más suave en dark mode
  },
  background: {
    primary: '#121212', // fondo general casi negro
  },
  foreground: {
    primary: '#1e1e1e', // gris oscuro para superficies elevadas
  },
  text: {
    primary: '#f1f3f5', // gris casi blanco para legibilidad
  },
}

export type DarkTheme = typeof darkTheme
