import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
//import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
//import { storybookMswRuntime } from '../src/msw/storybook-runtime'
// @ts-ignore
//import results from '../.jest-test-results.json'

// MSW for Storybook (browser)
initialize({
  onUnhandledRequest: 'bypass',
})

const preview: Preview = {
  decorators: [], // [withTests({ results: results || {} })],
  //decorators: [storybookMswRuntime],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewport: { options: INITIAL_VIEWPORTS },

    withRedux: {},
    withTheme: {},
    withRouter: {},
  },
  loaders: [mswLoader],
}

export default preview
