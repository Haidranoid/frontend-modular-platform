describe('accounts app flow', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=app-accounts--default')
  })

  it('should load app', () => {
    cy.url().should('include', 'app')
    cy.contains('Home Accounts Page').should('exist')
  })
})
