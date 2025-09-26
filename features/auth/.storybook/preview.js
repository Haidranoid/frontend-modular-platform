import { initialize, mswLoader } from 'msw-storybook-addon'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
//@ts-ignore
import {
  withRedux,
  withMemoryRouter,
  withTheme,
  withStorybookContext,
} from '@webapp/shared'
import { mswHandlers } from '../msw-handlers'
import { authRootReducer } from '../src'

// MSW para Storybook (browser)
initialize()

const preview = {
  decorators: [withStorybookContext, withMemoryRouter, withTheme, withRedux],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
    msw: { handlers: mswHandlers },
    storeConfig: { rootReducer: authRootReducer },
  },
  loaders: [mswLoader],
}

export default preview
