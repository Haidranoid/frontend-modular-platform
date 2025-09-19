// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import cypress jest matchers
import '@testing-library/cypress/add-commands'

// Import cypress reporter (for adding test info to the report)
//import 'cypress-mochawesome-reporter/register'

// now can use describe.each and it.each
import 'cypress-each'

// allows to access to local storage
import 'cypress-localstorage-commands'

// Import commands.js using ES2015 syntax:
import './commands'
