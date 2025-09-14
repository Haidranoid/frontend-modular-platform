import type { ReactRenderer } from '@storybook/react-webpack5'
import type { DecoratorFunction } from 'storybook/internal/csf'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { useGlobals } from '@storybook/preview-api'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from '#styles'
import { ThemeProvider } from '#providers'
import { useCallback, useEffect } from 'react'

export const withTheme: DecoratorFunction = (Story, context) => {
  const [globals, updateGlobals] = useGlobals()

  const storybookToggle = useCallback(() => {
    const next = globals.theme === 'light' ? 'dark' : 'light'
    updateGlobals({ theme: next })
  }, [globals.theme])

  useEffect(() => {
    //console.log({globals});
  }, [globals])

  return (
    <ThemeProvider initialTheme={globals.theme} storybookToggle={storybookToggle}>
      <Story />
    </ThemeProvider>
  )
}

export const withThemeV_0 = withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})
