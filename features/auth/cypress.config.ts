import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:6006/",
    supportFile: "cypress/support/e2e.ts",
    specPattern: [
      "cypress/storybook",
      "cypress/e2e/**/*.cy.{ts,js}",
    ],
    excludeSpecPattern: ["cypress/e2e/examples/**/*.cy.js"],
    screenshotOnRunFailure: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
  },
});
