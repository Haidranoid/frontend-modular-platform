import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { fetchUsers_200_handler } from '../src/msw-handlers'
import { usersReducer, routes } from '../src'
// @ts-ignore
import results from '../.jest-test-results.json'

// MSW para Storybook (browser)
initialize()

const preview: Preview = {
  decorators: [withTests({ results: results || {} })],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
    withRedux: { rootReducer: usersReducer },
    withRouter: { routes },
    msw: { handlers: [fetchUsers_200_handler] },
  },
  loaders: [mswLoader],
}

export default preview
