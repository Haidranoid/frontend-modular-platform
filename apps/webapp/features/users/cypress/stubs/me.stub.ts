import { LoginRequestResponse } from '@actions/authentication/AuthenticationActions.responses'
import { UserRoles } from '@constants'

// return cy.wrap() to chain stub setup
const OriginalMeSuccessfulStub = (email: string) => {
  return cy
    .fixture<Array<LoginRequestResponse>>('responses/login.success')
    .then((loginResponses) => {
      const match = loginResponses.find((res) => res.user.email === email)
      if (!match) throw new Error(`No match for email: ${email}`)

      cy.intercept('GET', '/api/v1/auth/me', {
        statusCode: 200,
        body: {
          data: match.user,
        },
      }).as('meResponse')

      cy.visit('/', {
        onBeforeLoad(win) {
          win.localStorage.setItem('accessToken', match.accessToken)
          win.localStorage.setItem('refreshToken', match.refreshToken)
        },
      })
    })
}

export const meStub = (as: UserRoles) => {
  return cy
    .fixture<Array<LoginRequestResponse>>('responses/login.success')
    .then((loginResponses) => {
      const match = loginResponses.find((res) => res.user.role === as)
      if (!match) throw new Error(`No match for role: ${as}`)

      cy.intercept('GET', '/api/v1/auth/me', {
        statusCode: 200,
        body: {
          user: match.user,
        },
      }).as('meResponse')

      return cy.wrap(match)
    })
}
