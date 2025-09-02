import type { Preview, ReactRenderer } from '@storybook/react-webpack5'
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../src'
import { themeDecorator } from '../src'

// Initialize MSW
initialize()

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'dark',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyles,
    }),
    //themeDecorator,
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case 'page':
          return (
              // Your page layout is probably a little more complex than this ;)
              <div className="page-layout">
                <Story />
              </div>
          )
        case 'page-mobile':
          return (
              <div className="page-mobile-layout">
                <Story />
              </div>
          );
        default:
          // In the default case, don't apply a layout
          return <Story />;
      }
    },
  ],
  parameters: {
    initialGlobals: {
      //backgrounds: { value: 'dark' },
      viewport: {
        value: 'ipad',
        isRotated: false
      },
    },
    /*
    backgrounds: {
      options: {
        dark: { name: darkTheme.name, value: darkTheme.background.primary },
        light: { name: lightTheme.name, value: lightTheme.background.primary },
        maroon: { name: 'Maroon', value: '#400' },
      },
    },
   */
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
}

export default preview
