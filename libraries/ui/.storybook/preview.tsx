import type { Preview } from "@storybook/react-webpack5";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { withTheme } from "../src";

// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    initialGlobals: {
      viewport: {
        value: "ipad",
        isRotated: false,
      },
    },
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
};

export default preview;
