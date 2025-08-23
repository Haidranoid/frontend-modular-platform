export class AuthenticationService {
  private static readonly ACCESS_TOKEN = 'accessToken';
  private static readonly REFRESH_TOKEN = 'refreshToken';

  /** Retorna el access token como string, o vacío si no existe */
  public static getAccessToken(): string {
    return localStorage.getItem(AuthenticationService.ACCESS_TOKEN) ?? '';
  }

  /** Retorna el refresh token como string, o vacío si no existe */
  public static getRefreshToken(): string {
    return localStorage.getItem(AuthenticationService.REFRESH_TOKEN) ?? '';
  }

  /** Guarda el access token */
  public static setAccessToken(token: string) {
    if (!token) throw new Error('accessToken is required');
    localStorage.setItem(AuthenticationService.ACCESS_TOKEN, token);
  }

  /** Guarda el refresh token */
  public static setRefreshToken(token: string) {
    if (!token) throw new Error('refreshToken is required');
    localStorage.setItem(AuthenticationService.REFRESH_TOKEN, token);
  }

  /** Inicia sesión guardando ambos tokens */
  public static startSession(accessToken: string, refreshToken: string) {
    this.setAccessToken(accessToken);
    this.setRefreshToken(refreshToken);
  }

  /** Cierra sesión eliminando ambos tokens */
  public static closeSession() {
    localStorage.removeItem(AuthenticationService.ACCESS_TOKEN);
    localStorage.removeItem(AuthenticationService.REFRESH_TOKEN);
  }
}
