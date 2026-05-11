import type { Decorator } from '@storybook/react'
import type { BaseDecoratorParameters } from '#types'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { useGlobals } from '@storybook/preview-api'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { useCallback, useEffect } from 'react'
import { GlobalStyles, lightTheme, darkTheme } from '#styles'
import { ThemeProvider, ThemeProviderProps } from '#providers'

export interface WithThemeParameters
  extends ThemeProviderProps,
    BaseDecoratorParameters {}

export interface WithThemeDecoratorsParameters {
  withTheme: Partial<WithThemeParameters>
}

export const withTheme: Decorator = (Story, { parameters }) => {
  const params = parameters as WithThemeDecoratorsParameters
  const config = params.withTheme

  if (config.disabled) {
    return <Story />
  }

  const [globals, updateGlobals] = useGlobals()

  const theme = globals?.theme ?? config?.initialTheme ?? 'dark'

  useEffect(() => {
    if (config.initialTheme) {
      updateGlobals({ theme: config.initialTheme })
    }
  }, [config.initialTheme])

  const storybookToggle = useCallback(() => {
    const next = globals.theme === 'light' ? 'dark' : 'light'
    updateGlobals({ theme: next })
  }, [globals.theme])

  //console.log({configTheme: config.initialTheme})
  //console.log({globalTheme: globals.theme})
  //console.log({ finalTheme: theme })

  return (
    <ThemeProvider initialTheme={theme} storybookToggle={storybookToggle}>
      <Story />
    </ThemeProvider>
  )
}

export const withTheme_v0: Decorator = withThemeFromJSXProvider({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})

/*

export const getStorybookThemeDecorator = async () => {
  const { withThemeFromJSXProvider } = await import('@storybook/addon-themes')
  return withThemeFromJSXProvider<ReactRenderer>({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProviderStyled,
    GlobalStyles: GlobalStyles,
  })
}

withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})
export const withThemeV_0 = withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})
  const [globals, updateGlobals] = useGlobals()

  const storybookToggle = useCallback(() => {
    const next = globals.theme === 'light' ? 'dark' : 'light'
    updateGlobals({ theme: next })
  }, [globals.theme])

  useEffect(() => {
    //console.log({globals});
  }, [globals])
 */
