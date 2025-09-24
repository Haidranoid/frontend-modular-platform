import type { Preview } from "@storybook/react-webpack5";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
//@ts-ignore
import { withRedux, withMemoryRouter, withTheme, withStorybookContext } from "@webapp/shared";

import { mswHandlers } from "../msw-handlers"
import { authRootReducer } from "../src";
// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [withStorybookContext, withTheme, withMemoryRouter, withRedux],
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
      initialPath: '/'
    },
    contextBoxConfig: {
      config: {
        location: {
          x: 0,
          y: 0,
        },
        size: {
          width: 300,
          height: 500,
        }
      }
    }
  },
  loaders: [mswLoader],
};

export default preview;
