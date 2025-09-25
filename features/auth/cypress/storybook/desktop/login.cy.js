describe('login flow', () => {
  beforeEach(() => {
    cy.visit("?path=/story/app-auth--default")
  })

  it('should load app', () => {
    cy.url().should('include', 'app')
    cy.url().should('include', Cypress.config().baseUrl) // add baseUrl for accuracy
  })
})
