import type { Preview } from '@storybook/react'
import { spyOn } from 'storybook/test'
import { initialize, mswLoader } from 'msw-storybook-addon'
//import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
// @ts-ignore
//import results from '../.jest-test-results.json'

// MSW for Storybook (browser)
initialize()

const preview: Preview = {
  decorators: [], // [withTests({ results: results || {} })],
  tags: ['autodocs'],
  async beforeEach() {
    spyOn(console, 'log').mockName('console.log')
    spyOn(console, 'warn').mockName('console.warn')
    spyOn(console, 'error').mockName('console.error')
  },
  parameters: {
    layout: 'fullscreen',
    viewport: { options: INITIAL_VIEWPORTS },

    withRedux: {},
    withTheme: {},
    withRouter: {},
    withContextBox: {},
  },
  loaders: [mswLoader],
}

export default preview
