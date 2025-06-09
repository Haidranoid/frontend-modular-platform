import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#007bff',
}

export const darkTheme: DefaultTheme = {
  background: '#121212',
  text: '#ffffff',
  primary: '#1e90ff',
}

export type LightTheme = typeof lightTheme
export type DarkTheme = typeof darkTheme
