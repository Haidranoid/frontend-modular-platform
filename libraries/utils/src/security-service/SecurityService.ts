type NavigatorLike = {
  language?: string
  platform?: string
  cookieEnabled?: boolean
  plugins?: any
  systemLanguage?: string
  cpuClass?: string
}

type ScreenLike = {
  width: number
  height: number
}

export class SecurityService {
  private userAgent: string
  private navigator: NavigatorLike
  private screen: ScreenLike

  constructor(userAgent: string, navigator: NavigatorLike, screen: ScreenLike) {
    this.userAgent = userAgent
    this.navigator = navigator
    this.screen = screen
  }

  private hash(toHash: string): number {
    let hash = 0
    if (toHash.length === 0) return hash
    for (let i = 0; i < toHash.length; i++) {
      const char = toHash.charCodeAt(i)
      hash = (hash << 5) - hash + char
    }
    return hash
  }

  private getBrowserId(): string {
    const ua = this.userAgent
    if (ua.includes('Opera')) return 'O'
    if (ua.includes('Chrome')) return 'C'
    if (ua.includes('Safari')) return 'S'
    if (ua.includes('Firefox')) return 'F'
    if (
      ua.includes('MSIE') ||
      (ua.includes('Windows') && ua.includes('Trident') && ua.includes('rv:11'))
    )
      return 'M'
    return 'U'
  }

  private getTimeZoneOffset(): string {
    const offset = (-1 * new Date().getTimezoneOffset()).toString().padStart(3, '0')
    return offset.startsWith('-') ? offset : `+${offset}`
  }

  private getLanguageCode(): string {
    const lang =
      this.getBrowserId() === 'M'
        ? this.navigator.systemLanguage
        : this.navigator.language
    return String(lang ?? 'XX')
      .substring(0, 2)
      .toUpperCase()
  }

  private getCookiesEnabled(): number {
    return this.navigator.cookieEnabled ? 1 : 0
  }

  private getPlatform(): string {
    const ua = this.userAgent
    if (ua.includes('Android')) return 'D'
    if (ua.includes('iPhone')) return 'I'
    if (ua.includes('iPad')) return 'P'
    if (ua.includes('Windows')) return 'W'
    if (ua.includes('AppleWebKit')) return 'A'
    if (ua.includes('Blackberry')) return 'B'
    if (ua.includes('Kindle')) return 'K'
    if (ua.includes('Nokia')) return 'N'
    if (ua.includes('Ericsson')) return 'E'
    if (ua.includes('Gecko')) return 'G'
    return 'U'
  }

  private getMarketingId(): string {
    let plugins = ''

    if (this.navigator.plugins && typeof this.navigator.plugins.length === 'number') {
      for (let i = 0; i < this.navigator.plugins.length; i++) {
        const plugin = this.navigator.plugins[i]
        if (plugin && typeof plugin.name === 'string') {
          plugins += plugin.name
        }
      }
    }

    let id = this.userAgent
    id += this.screen.width
    id += this.screen.height
    id += this.navigator.platform
    id += this.navigator.cpuClass ?? ''
    id += plugins

    let marketingIdHash = this.hash(id).toString().substring(0, 12)
    marketingIdHash = marketingIdHash.padStart(12, '0')

    return marketingIdHash.replace(/-/g, 'A')
  }

  public getBrowserFingerprint(): string {
    return (
      this.getBrowserId() +
      this.getTimeZoneOffset() +
      this.getLanguageCode() +
      this.getCookiesEnabled() +
      this.getPlatform() +
      '|' +
      this.getMarketingId()
    )
  }
}

export const getBrowserSecurityService = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    throw new Error('getBrowserSecurityService only works in the browser')
  }

  return new SecurityService(navigator.userAgent, navigator, window.screen)
}
