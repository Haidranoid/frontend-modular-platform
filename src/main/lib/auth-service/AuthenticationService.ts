class AuthenticationService {
  private static ACCESS_TOKEN = 'accessToken'
  private static REFRESH_TOKEN = 'refreshToken'

  public static getAccessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN)
  }

  public static getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN)
  }

  public static setAccessToken(accessToken: string) {
    localStorage.setItem(this.ACCESS_TOKEN, accessToken)
  }

  public static setRefreshToken(refreshToken: string) {
    localStorage.setItem(this.REFRESH_TOKEN, refreshToken)
  }

  public static startSession(accessToken: string, refreshToken: string) {
    AuthenticationService.setAccessToken(accessToken)
    AuthenticationService.setRefreshToken(refreshToken)
  }

  public static closeSession() {
    localStorage.removeItem(this.ACCESS_TOKEN)
    localStorage.removeItem(this.REFRESH_TOKEN)
  }
}

export default AuthenticationService
