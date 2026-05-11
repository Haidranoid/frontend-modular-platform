describe('auth app flow', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=app-auth--default')
  })

  it('should load app', () => {
    cy.url().should('include', 'app')
    cy.contains('Home Auth Page').should('exist')
  })

  it('should navigate to login', () => {
    cy.contains('login').click()
    cy.contains('Log In').should('exist')
  })

  it('should navigate to signup', () => {
    cy.contains('signup').click()
    cy.contains('Signup').should('exist')
  })
})
