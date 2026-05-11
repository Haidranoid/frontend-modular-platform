import { createContext, Context } from 'react'
import { ThemeModes, darkTheme } from '../../themes'

export interface ThemeContextI {
  mode: ThemeModes
  toggle: () => void
}

export const ThemeContext: Context<ThemeContextI> = createContext<ThemeContextI>({
  mode: darkTheme,
  toggle: () => console.warn('ThemeContext: default toggle'),
})
