import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { withRedux, withMemoryRouter, withTheme, withStorybookContext } from "../src";

// MSW para Storybook (browser)
initialize()

const preview = {
  decorators: [withStorybookContext, withMemoryRouter, withTheme, withRedux],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
  },
  loaders: [mswLoader],
};

export default preview
