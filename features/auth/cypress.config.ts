import { defineConfig } from 'cypress'
//import * as webpackPreprocessor from '@cypress/webpack-preprocessor'
//import * as webpackConfig from './webpack.config'

const webpackPreprocessorOptions = {
  //webpackOptions: webpackConfig({ mode: 'development' }),
  watchOptions: {},
}

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    //  on('file:preprocessor', webpackPreprocessor(webpackPreprocessorOptions))
    },
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: ['cypress/e2e/**/*.cy.ts'],
    excludeSpecPattern: ['cypress/e2e/examples/**/*.cy.js'],
    screenshotOnRunFailure: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
  },
})
