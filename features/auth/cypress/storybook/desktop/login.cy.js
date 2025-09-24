describe('login flow', () => {
  let loginRequestMock
  let loginResponseMock

  describe('auth app', () => {
    beforeEach(() => {
      cy.visit("?path=/story/app-auth--default")
    })

    it('should be visible', () => {
      cy.url().should('include', 'app')
      cy.url().should('include', Cypress.config().baseUrl) // add baseUrl for accuracy
    })
  })

  describe.skip('login as teacher', () => {
    beforeEach(() => {
      cy.intercept('POST', '/api/v1/auth/login', (req) => {
        req.reply({
          statusCode: 200,
          body: loginResponseMock.TEACHER,
        })
      }).as('loginResponse')
    })

    it('should navigate to home page as teacher', () => {
      //cy.visit('/login')
      cy.url().should('include', '/login')

      cy.get('#email').type(loginRequestMock.TEACHER.email)
      cy.get('#password').type(loginRequestMock.TEACHER.password)
      cy.findByRole('button', { name: /click para iniciar sesión/i }).click() // Requires @testing-library/cypress

      cy.wait('@loginResponse') // Wait for the mocked request to complete

      cy.url().should('eq', Cypress.config().baseUrl) // add baseUrl for accuracy
    })
  })

  describe.skip('login as student', () => {
    beforeEach(() => {
      cy.intercept('POST', '/api/v1/auth/login', (req) => {
        req.reply({
          statusCode: 200,
          body: loginResponseMock.STUDENT,
        })
      }).as('loginResponse')
    })

    it('should navigate to home page as student', () => {
      //cy.visit('/login')
      cy.url().should('include', '/login')

      cy.get('#email').type(loginRequestMock.STUDENT.email)
      cy.get('#password').type(loginRequestMock.STUDENT.password)
      cy.findByRole('button', { name: /click para iniciar sesión/i }).click() // Requires @testing-library/cypress

      cy.wait('@loginResponse') // Wait for the mocked request to complete

      cy.url().should('eq', Cypress.config().baseUrl) // add baseUrl for accuracy
    })
  })

  describe.skip('login as student with custom command', () => {
    beforeEach(() => {
      cy.intercept('POST', '/api/v1/auth/login', (req) => {
        req.reply({
          statusCode: 200,
          body: loginResponseMock.STUDENT,
        })
      }).as('loginResponse')
    })

    it('should navigate to home page as student', () => {
      cy.setCredentialsAs('STUDENT')
      cy.findByRole('button', { name: /iniciar sesión/i }).click()

      cy.wait('@loginResponse') // Wait for the mocked request to complete

      cy.url().should('eq', Cypress.config().baseUrl) // add baseUrl for accuracy
    })
  })

  describe.skip('login as dynamic user with custom command and login stub', () => {
    beforeEach(() => {
      cy.goToLoginAndClearForm()
    })

    afterEach(() => {
      cy.url().should('eq', Cypress.config().baseUrl)
    })

    it('should navigate to home page as admin', () => {
      cy.login('admin@hotmail.com', '12345678')
    })

    it('should navigate to home page as teacher', () => {
      cy.login('teacher@hotmail.com', '12345678')
    })

    it('should navigate to home page as student', () => {
      cy.login('student@hotmail.com', '12345678')
    })
  })
})
