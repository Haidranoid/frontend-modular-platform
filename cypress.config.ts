import { defineConfig } from 'cypress'
import webpackPreprocessor from '@cypress/webpack-preprocessor'
import webpackConfig from './webpack.config'

const webpackPreprocessorOptions = {
  webpackOptions: webpackConfig({ mode: 'cy-dev' }),
  watchOptions: {},
}

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor(webpackPreprocessorOptions))
    },
    supportFile: 'cypress/support/e2e.ts',
    specPattern: ['cypress/e2e/**/*.cy.ts'],
    excludeSpecPattern: ['cypress/e2e/examples/**/*.cy.js'],
    screenshotOnRunFailure: false,
    viewportHeight: 1000,
    viewportWidth: 1920,
    video: false,
  },
})
