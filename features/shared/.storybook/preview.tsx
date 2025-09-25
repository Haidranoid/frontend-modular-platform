import type { Preview } from "@storybook/react-webpack5";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { withRedux, withMemoryRouter, withTheme, withStorybookContext } from "../src";

// Initialize MSW
initialize();

const preview: Preview = {
  decorators: [withStorybookContext, withMemoryRouter, withTheme, withRedux],
  args: {
  },
  parameters: {
    initialGlobals: {},
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    storeConfig: {
      rootReducer: {}
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
