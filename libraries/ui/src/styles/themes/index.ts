export interface CustomTheme {
  colors: {
    primary: string
    secondary?: string
  }
  background: string
  text: string
}

export const lightTheme: CustomTheme = {
  colors: {
    primary: '#007bff',
  },
  background: '#ffffff',
  text: '#000000',
}

export const darkTheme: CustomTheme = {
  colors: {
    primary: '#1e90ff',
  },
  background: '#121212',
  text: '#ffffff',
}

export type LightTheme = typeof lightTheme
export type DarkTheme = typeof darkTheme
