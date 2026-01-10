import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
//import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
// @ts-ignore
//import results from '../.jest-test-results.json'

// MSW for Storybook (browser)
initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  decorators: [], // [withTests({ results: results || {} })],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    viewport: { options: INITIAL_VIEWPORTS },

    withContextBox: { disabled: true },
    withRouter: { disabled: true },
    withTheme: { disabled: false },
    withRedux: { disabled: true },
  },
  loaders: [mswLoader],
}

export default preview
