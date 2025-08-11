/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-each" />
/// <reference types="cypress-localstorage-commands" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import { loginSuccessfulStub } from '../stubs/login.stub'
import { meStub } from '../stubs/me.stub'
import { UserRoles } from '@constants'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      setCredentialsAs(role: string): Chainable<void>
      goToLoginAndClearForm(): Chainable<void>
      login(email: string, password: string): Chainable<void>
      goTo(url: string, as?: UserRoles): Chainable<void>
    }
  }
}

Cypress.Commands.add('goToLoginAndClearForm', () => {
  cy.visit('/login')
  cy.get('#email').clear()
  cy.get('#password').clear()
})

Cypress.Commands.add('setCredentialsAs', (role) => {
  let email = ''
  let password = ''

  cy.fixture('requests/loginRequestMock')
    .then((data) => {
      email = data[role].email
      password = data[role].password
    })
    .then(() => {
      cy.get('#email').type(email)
      cy.get('#password').type(password)
    })
})

Cypress.Commands.add('login', (email: string, password: string) => {
  // First, set up stub and wait for intercept registration
  loginSuccessfulStub(email).then(() => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.findByRole('button', { name: /iniciar sesión/i }).click()

    // Wait for the stubbed login request to complete
    cy.wait('@loginResponse')

    // Now you can assert url or other things
    //cy.url().should('eq', Cypress.config().baseUrl)
  })
})

Cypress.Commands.add('goTo', (url: string, as: UserRoles = UserRoles.ADMIN) => {
  meStub(as).then(({ accessToken, refreshToken }) => {
    cy.visit(url, {
      onBeforeLoad(win) {
        win.localStorage.setItem('accessToken', accessToken)
        win.localStorage.setItem('refreshToken', refreshToken)
      },
    })
    cy.wait('@meResponse')
  })
})
