import { createContext } from 'react'
import { ThemeModes, darkTheme } from '#styles'

export interface ThemeContextI {
  mode: ThemeModes
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextI>({
  mode: darkTheme,
  toggle: () => { console.log('default toggle')},
})
