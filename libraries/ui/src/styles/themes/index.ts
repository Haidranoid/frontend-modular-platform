export interface CustomTheme {
  colors: {
    primary: string
    secondary?: string
  }
  background: {
    primary: string
    secondary?: string
  }
  foreground: {
    primary: string
    secondary?: string
  }
  text: {
    primary: string
    secondary?: string
  }
}

export const lightTheme: CustomTheme = {
  colors: {
    primary: '#007bff', // azul vibrante
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

export const darkTheme: CustomTheme = {
  colors: {
    primary: '#4dabf7', // azul más suave en dark mode
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

export type LightTheme = typeof lightTheme
export type DarkTheme = typeof darkTheme
