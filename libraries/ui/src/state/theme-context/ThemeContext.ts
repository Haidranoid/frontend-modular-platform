import { createContext } from 'react'
import { ThemeModes, darkTheme } from '#ui'

export interface ThemeContextI {
  mode: ThemeModes
  toggle: () => void
}

export const themeContext = createContext<ThemeContextI>({
  mode: darkTheme,
  toggle: () => {},
})

export const ThemeContextProvider = themeContext.Provider
