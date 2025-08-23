import React, { useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { GlobalStyle } from '../global-style'
import { ThemeMode, ThemeModeContext } from '../hooks'
import { lightTheme, darkTheme } from '../themes'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [mode, setMode] = useState<ThemeMode>('light')

  const toggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const theme = mode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeModeContext.Provider value={{ mode, toggle }}>
      <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {props.children}
      </ThemeProviderStyled>
    </ThemeModeContext.Provider>
  )
}

export default ThemeProvider