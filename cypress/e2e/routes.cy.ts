import { UserRoles } from '@constants'
import Routes, { Paths } from '@routes'

describe('Routes navigation flow', () => {
  describe('Navigation as admin', () => {
    it.each(Routes)(
      (route) => `should navigate to ${route.path}`,
      (route) => {
        cy.goTo(route.path, UserRoles.ADMIN)
        cy.url().should('include', route.path)
      },
    )
  })

  describe('Navigation as teacher', () => {
    it.each(Routes)(
      (route) => {
          let isForbidden: boolean = true
          if (!route.allowedRoles){
              isForbidden = false
          }
          if (route.allowedRoles?.length === 0) {
              isForbidden = false
          }
          if (route.allowedRoles?.includes(UserRoles.TEACHER || UserRoles.EVERYONE)) {
              isForbidden = false
          }
          return `should ${isForbidden ? 'not be able' : 'be able '} navigate to ${route.path}`
      },
      (route) => {
          let isForbidden: boolean = true
          if (!route.allowedRoles){
              isForbidden = false
          }
          if (route.allowedRoles?.length === 0) {
              isForbidden = false
          }
          if (route.allowedRoles?.includes(UserRoles.TEACHER || UserRoles.EVERYONE)) {
              isForbidden = false
          }
        cy.goTo(route.path, UserRoles.TEACHER)
        if (isForbidden) {
          cy.url().should('include', Paths.FORBIDDEN)
        } else {
          cy.url().should('include', route.path)
        }
      },
    )
  })

  describe('Navigation as student', () => {
    it.each(Routes)(
      (route) => {
          let isForbidden: boolean = true
          if (!route.allowedRoles){
              isForbidden = false
          }
          if (route.allowedRoles?.length === 0) {
              isForbidden = false
          }
          if (route.allowedRoles?.includes(UserRoles.STUDENT || UserRoles.EVERYONE)) {
              isForbidden = false
          }
          return `should ${isForbidden ? 'not be able' : 'be able '} navigate to ${route.path}`
      },
      (route) => {
          let isForbidden: boolean = true
          if (!route.allowedRoles){
              isForbidden = false
          }
          if (route.allowedRoles?.length === 0) {
              isForbidden = false
          }
          if (route.allowedRoles?.includes(UserRoles.STUDENT || UserRoles.EVERYONE)) {
              isForbidden = false
          }

          cy.goTo(route.path, UserRoles.STUDENT)
          if (isForbidden) {
              cy.url().should('include', Paths.FORBIDDEN)
          } else {
              cy.url().should('include', route.path)
          }
      },
    )
  })
})
