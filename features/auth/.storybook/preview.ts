import type { Preview } from "@storybook/react-webpack5";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
//@ts-ignore
import { withRedux, withTheme, withRouter } from "@webapp/shared";

import { mswHandlers } from "../msw-handlers"
import { authRootReducer, routes } from "../src";

// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [withRedux, withTheme, withRouter],
  parameters: {
    initialGlobals: {},
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    msw: {
      handlers: mswHandlers,
    },
    storeConfig: {
      rootReducer: authRootReducer
    },
    routerConfig: {
      routes: routes,
      initialPath: '/'
    }
  },
  loaders: [mswLoader],
};

export default preview;
