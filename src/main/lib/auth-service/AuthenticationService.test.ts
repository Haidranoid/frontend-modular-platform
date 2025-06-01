import AuthenticationService from './AuthenticationService'

describe('AuthenticationService', () => {
  const accessToken = 'dummy-access-token'
  const refreshToken = 'dummy-refresh-token'

  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  describe('getAccessToken', () => {
    it('should return null if no access token is set', () => {
      expect(AuthenticationService.getAccessToken()).toBeNull()
    })

    it('should return the stored access token', () => {
      localStorage.setItem('accessToken', accessToken)
      expect(AuthenticationService.getAccessToken()).toBe(accessToken)
    })
  })

  describe('getRefreshToken', () => {
    it('should return null if no refresh token is set', () => {
      expect(AuthenticationService.getRefreshToken()).toBeNull()
    })

    it('should return the stored refresh token', () => {
      localStorage.setItem('refreshToken', refreshToken)
      expect(AuthenticationService.getRefreshToken()).toBe(refreshToken)
    })
  })

  describe('setAccessToken', () => {
    it('should store the access token in localStorage', () => {
      AuthenticationService.setAccessToken(accessToken)
      expect(localStorage.getItem('accessToken')).toBe(accessToken)
    })
  })

  describe('setRefreshToken', () => {
    it('should store the refresh token in localStorage', () => {
      AuthenticationService.setRefreshToken(refreshToken)
      expect(localStorage.getItem('refreshToken')).toBe(refreshToken)
    })
  })

  describe('startSession', () => {
    it('should store both access and refresh tokens', () => {
      AuthenticationService.startSession(accessToken, refreshToken)
      expect(localStorage.getItem('accessToken')).toBe(accessToken)
      expect(localStorage.getItem('refreshToken')).toBe(refreshToken)
    })
  })

  describe('closeSession', () => {
    it('should remove both access and refresh tokens', () => {
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      AuthenticationService.closeSession()

      expect(localStorage.getItem('accessToken')).toBeNull()
      expect(localStorage.getItem('refreshToken')).toBeNull()
    })
  })
})
