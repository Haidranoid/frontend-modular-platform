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

declare global {
  namespace Cypress {
    interface Chainable {
      goTo(url: string): Chainable<void>
    }
  }
}

//Cypress.Commands.add('goTo', (url: string, as: UserRoles = UserRoles.ADMIN) => {
Cypress.Commands.add('goTo', (url: string) => {
  //meStub(as).then(({ accessToken, refreshToken }) => {
    cy.visit(url, {
      onBeforeLoad(win) {
        //win.localStorage.setItem('accessToken', accessToken)
        //win.localStorage.setItem('refreshToken', refreshToken)
      },
    })
    //cy.wait('@meResponse')
  //})
})

export {}