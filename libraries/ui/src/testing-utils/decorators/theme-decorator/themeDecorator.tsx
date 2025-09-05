import type { ReactRenderer } from '@storybook/react-webpack5'
import type { DecoratorFunction } from 'storybook/internal/csf'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from '#styles'
import { ThemeProvider } from '#providers'

export const themeDecorator: DecoratorFunction = (Story, _context) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}

export const withTheme = withThemeFromJSXProvider<ReactRenderer>({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  defaultTheme: 'dark',
  Provider: ThemeProviderStyled,
  GlobalStyles: GlobalStyles,
})
