import { FC, ReactNode, useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { ThemeContextProvider } from '#state'
import { GlobalStyles } from '../global-styles'
import { lightTheme, darkTheme, ThemeModes } from '../themes'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const [mode, setMode] = useState<ThemeModes>(darkTheme)

  const toggle = () => {
    setMode((prev) => (prev.name === 'light' ? darkTheme : lightTheme))
  }

  return (
    <ThemeContextProvider value={{ mode, toggle }}>
      <ThemeProviderStyled theme={mode}>
        <GlobalStyles />
        {props.children}
      </ThemeProviderStyled>
    </ThemeContextProvider>
  )
}
