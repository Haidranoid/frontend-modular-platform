import { FC, ReactNode, useState, useEffect } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { ThemeContext, GlobalStyles, lightTheme, darkTheme, ThemeModes } from '#styles'

export interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: 'light' | 'dark'
  storybookToggle?: () => void
}

//export const ThemeContextProvider = ThemeContext.Provider

export const ThemeProvider: FC<ThemeProviderProps> = ({
  initialTheme,
  storybookToggle,
  children,
}) => {
  const [mode, setMode] = useState<ThemeModes>(
    initialTheme === 'light' ? lightTheme : darkTheme,
  )

  useEffect(() => {
    if (initialTheme) {
      setMode(initialTheme === 'light' ? lightTheme : darkTheme)
    }
  }, [initialTheme])

  const toggle = () => {
    if (storybookToggle) {
      storybookToggle()
    } else {
      setMode((prev) => (prev.name === 'light' ? darkTheme : lightTheme))
    }
  }

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <ThemeProviderStyled theme={mode}>
        <GlobalStyles />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
