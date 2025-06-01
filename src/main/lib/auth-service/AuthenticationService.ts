const ACCESS_TOKEN = 'accessToken'
const REFRESH_TOKEN = 'refreshToken'

class AuthenticationService {
  public static getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN)
  }

  public static getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN)
  }

  public static setAccessToken(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN, accessToken)
  }

  public static setRefreshToken(refreshToken: string) {
    localStorage.setItem(REFRESH_TOKEN, refreshToken)
  }

  public static startSession(accessToken: string, refreshToken: string) {
    AuthenticationService.setAccessToken(accessToken)
    AuthenticationService.setRefreshToken(refreshToken)
  }

  public static closeSession() {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
  }
}

export default AuthenticationService
