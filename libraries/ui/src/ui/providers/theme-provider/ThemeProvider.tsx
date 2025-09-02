import { FC, ReactNode, useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { ThemeContext } from '#state'
import { GlobalStyles, lightTheme, darkTheme, ThemeModes } from '#styles'

interface ThemeProviderProps {
  children: ReactNode
}

//export const ThemeContextProvider = ThemeContext.Provider

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const [mode, setMode] = useState<ThemeModes>(darkTheme)

  const toggle = () => {
      console.log({mode})
      console.log('custom toggle')
    setMode((prev) => (prev.name === 'light' ? darkTheme : lightTheme))
  }

    console.log("ThemeProvider context ref:", ThemeContext);

    return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <ThemeProviderStyled theme={mode}>
        <GlobalStyles />
        {props.children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
