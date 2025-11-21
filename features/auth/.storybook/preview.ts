import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { authReducer, routes } from '../src'
// @ts-ignore
//import results from '../.jest-test-results.json'

// MSW para Storybook (browser)
initialize()

const preview: Preview = {
  decorators: [],
  //decorators: [withTests({ results: results || {} })],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
    withRedux: { rootReducer: authReducer },
    withRouter: { routes },
  },
  loaders: [mswLoader],
}

export default preview
