export class AuthenticationService {
  private static readonly ACCESS_TOKEN = 'accessToken'
  private static readonly REFRESH_TOKEN = 'refreshToken'

  public static getAccessToken(): string {
    return localStorage.getItem(AuthenticationService.ACCESS_TOKEN) ?? ''
  }

  public static getRefreshToken(): string {
    return localStorage.getItem(AuthenticationService.REFRESH_TOKEN) ?? ''
  }

  public static setAccessToken(token: string) {
    if (!token) throw new Error('accessToken is required')
    localStorage.setItem(AuthenticationService.ACCESS_TOKEN, token)
  }

  public static setRefreshToken(token: string) {
    if (!token) throw new Error('refreshToken is required')
    localStorage.setItem(AuthenticationService.REFRESH_TOKEN, token)
  }

  public static startSession(accessToken: string, refreshToken: string) {
    this.setAccessToken(accessToken)
    this.setRefreshToken(refreshToken)
  }

  public static closeSession() {
    localStorage.removeItem(AuthenticationService.ACCESS_TOKEN)
    localStorage.removeItem(AuthenticationService.REFRESH_TOKEN)
  }
}
