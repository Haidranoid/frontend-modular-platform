describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should visit home', () => {
    cy.url().should('contain', '/')
  })
})
