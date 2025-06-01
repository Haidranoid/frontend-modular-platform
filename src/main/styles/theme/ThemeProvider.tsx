import React, { FC } from 'react'
import { createTheme, ThemeProvider as ThemeProviderMUI } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1A88E5',
      //main: '#0d3d63',
    },
    secondary: {
      main: '#1a64e5',
    },
    mode: 'dark',
  },
})

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>
}

export default ThemeProvider
