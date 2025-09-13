import type { Preview } from "@storybook/react-webpack5";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
// @ts-ignore
import { withApp, withTheme } from "@webapp/shared";

import { authReducer, routes } from "../src"

// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [withTheme, withApp],
  parameters: {
    initialGlobals: {},
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    storeConfig: {
      rootReducer: authReducer
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
