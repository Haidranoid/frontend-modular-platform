import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { usersReducer } from '../src'
// @ts-ignore
//import results from '../.jest-test-results.json'

// MSW para Storybook (browser)
initialize()

const preview: Preview = {
  decorators: [],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
    withRedux: {
      config: {
        rootReducer: usersReducer
      }
    },
  },
  loaders: [mswLoader],
}

export default preview
