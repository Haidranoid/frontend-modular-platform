import type { ReactRenderer } from "@storybook/react-webpack5";
import type { DecoratorFunction } from 'storybook/internal/csf'
import { useGlobals } from '@storybook/preview-api'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { useCallback } from "react";
import { GlobalStyles, lightTheme, darkTheme } from '#styles'
import { ThemeProvider } from '#providers'
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

export interface WithThemeParameters {
  themeConfig?: {
    initialTheme?: 'light' | 'dark'
  }
}

export const withTheme: DecoratorFunction<ReactRenderer> = (Story,  { parameters }) => {
  if (parameters?.disableGlobalDecorators) return <Story />
  if (parameters?.withTheme?.disable) return <Story />

  const _themeConfig = (parameters as WithThemeParameters).themeConfig

  const [globals, updateGlobals] = useGlobals()

  const storybookToggle = useCallback(() => {
    const next = globals.theme === 'light' ? 'dark' : 'light'
    updateGlobals({ theme: next })
  }, [globals.theme])

  return (
    <ThemeProvider initialTheme={globals.theme} storybookToggle={storybookToggle}>
      <Story />
    </ThemeProvider>
  )
}
export const withTheme_v0 = withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})

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