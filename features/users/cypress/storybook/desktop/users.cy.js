describe('users app flow', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=app-users--default')
  })

  it('should load app', () => {
    cy.url().should('include', 'app')
    cy.contains('Home Users Page').should('exist')
  })
})
