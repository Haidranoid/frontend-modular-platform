import type { Preview } from '@storybook/react-webpack5'
import { initialize, mswLoader } from "msw-storybook-addon";

// Initialize MSW
initialize()

const preview: Preview = {
  parameters: {
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
