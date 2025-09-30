import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import {
  withRedux,
  withMemoryRouter,
  withTheme,
  withStorybookContext,
} from '@webapp/shared'
import { mswHandlers } from '../msw-handlers'
import { authRootReducer } from '../src'
import { withTests } from '@storybook/addon-jest'
// @ts-ignore
//import results from '../.jest-test-results.json'

// MSW para Storybook (browser)
initialize()

const preview: Preview = {
  decorators: [
    withTests({ results: {} }),
    withStorybookContext,
    withMemoryRouter,
    withTheme,
    withRedux,
  ],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
    msw: { handlers: mswHandlers },
    storeConfig: { rootReducer: authRootReducer },
  },
  loaders: [mswLoader],
}

export default preview
