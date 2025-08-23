import { createContext, useContext } from 'react'

export type ThemeMode = 'light' | 'dark'

export const ThemeModeContext = createContext({
  mode: 'light' as ThemeMode,
  toggle: () => {},
})

export const useThemeMode = () => useContext(ThemeModeContext)
