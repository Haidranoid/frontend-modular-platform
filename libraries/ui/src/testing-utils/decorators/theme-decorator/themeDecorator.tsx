import { ThemeProvider } from '#ui'
import { DecoratorFunction } from 'storybook/internal/csf'

export const themeDecorator: DecoratorFunction = (Story, _context) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
}
