import type { Preview } from '@storybook/react-webpack5'
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

// Initialize MSW
initialize()

const preview: Preview = {
  decorators: [
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
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    initialGlobals: {
      viewport: {
        value: 'ipad',
        isRotated: false
      },
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
