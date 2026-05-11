console.log('login.stub')
/*
import { LoginRequestResponse } from '@actions/authentication/AuthenticationActions.responses'

// return cy.wrap() to chain stub setup
export const loginSuccessfulStub = (email: string) => {
  return cy
    .fixture<Array<LoginRequestResponse>>('responses/login.success')
    .then((loginResponsesFixtures) => {
      const loginResponse = loginResponsesFixtures.find(
        (response) => response.user.email === email,
      )

      cy.intercept('POST', '/api/v1/auth/login', (req) => {
        req.reply({
          statusCode: 200,
          body: loginResponse,
        })
      }).as('loginResponse')
    })
}
*/
