import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { withRedux, withMemoryRouter, withTheme, withStorybookContext } from '../src'
//import { getStorybookThemeDecorator } from '../src'
// @ts-ignore
import results from '../.jest-test-results.json'

// MSW para Storybook (browser)
initialize()

//getStorybookThemeDecorator()

const preview: Preview = {
  decorators: [
    withTests({ results }),
    withStorybookContext,
    withMemoryRouter,
    withTheme,
    withRedux,
  ],
  parameters: {
    viewport: { options: INITIAL_VIEWPORTS },
  },
  loaders: [mswLoader],
}

export default preview
