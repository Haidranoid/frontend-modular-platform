import { generateAllowedRoles } from './index'
import { Roles } from '@constants'

describe('Helpers functions', () => {
  describe('generateAllowedRoles', () => {
    it('should return all the allowed roles for the route', () => {
      const generatedRoles = generateAllowedRoles([Roles.EVERYONE])
      const size = generatedRoles.size

      expect(size).toBe(4)
    })

    it('should return only 0 allowed roles for the route', () => {
      const generatedRoles = generateAllowedRoles([])
      const size = generatedRoles.size

      expect(size).toBe(4)
    })
  })
})
