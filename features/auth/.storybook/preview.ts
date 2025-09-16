import type { Preview } from "@storybook/react-webpack5";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
//@ts-ignore
import { withRedux, withTheme, withRouter } from "@webapp/shared";

import { authReducer } from "../src"

// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [withRedux, withTheme, withRouter],
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
