import getBrowserFingerprint from './getBrowserFingerprint'
import * as fingerprintModule from './getBrowserFingerprint'

describe('Fingerprint functions', () => {
  describe('hash', () => {
    it('returns 0 for empty string', () => {
      expect(fingerprintModule['hash']('')).toBe(0)
    })

    it('returns same hash for same input', () => {
      const result1 = fingerprintModule['hash']('test123')
      const result2 = fingerprintModule['hash']('test123')
      expect(result1).toBe(result2)
    })

    it('returns different hashes for different inputs', () => {
      const a = fingerprintModule['hash']('hello')
      const b = fingerprintModule['hash']('world')
      expect(a).not.toBe(b)
    })
  })

  describe('getBrowserId', () => {
    it('detects Chrome', () => {
      expect(fingerprintModule['getBrowserId']('Chrome')).toBe('C')
    })

    it('detects Firefox', () => {
      expect(fingerprintModule['getBrowserId']('Firefox')).toBe('F')
    })

    it('detects Safari', () => {
      expect(fingerprintModule['getBrowserId']('Safari')).toBe('S')
    })

    it('detects Opera', () => {
      expect(fingerprintModule['getBrowserId']('Opera')).toBe('O')
    })

    it('detects MSIE / Trident', () => {
      expect(fingerprintModule['getBrowserId']('Windows Trident rv:11')).toBe('M')
    })

    it('returns U for unknown', () => {
      expect(fingerprintModule['getBrowserId']('Unknown')).toBe('U')
    })
  })

  describe('getTimeZoneOffset', () => {
    const timeZomeSpy = jest.spyOn(Date.prototype, 'getTimezoneOffset')

    beforeEach(() => {
      timeZomeSpy.mockClear()
    })

    it('returns formatted timezone offset', () => {
      const offset = fingerprintModule['getTimeZoneOffset']()
      expect(offset).toMatch(/^[+-]\d{3}$/)
    })

    it('should modify time zone if length is 2', () => {
      timeZomeSpy.mockReturnValue(-80)
      const offset = fingerprintModule['getTimeZoneOffset']()
      expect(offset).toMatch(/^[+-]\d{3}$/)
    })

    it('should modify time zone if length is 1', () => {
      timeZomeSpy.mockReturnValue(-8)
      const offset = fingerprintModule['getTimeZoneOffset']()
      expect(offset).toMatch(/^[+-]\d{3}$/)
    })

    it('should modify time zone to return positive number', () => {
      timeZomeSpy.mockReturnValue(480)
      const offset = fingerprintModule['getTimeZoneOffset']()
      expect(offset).toMatch(/^[+-]\d{3}$/)
    })
  })

  describe('getLanguageCode', () => {
    const originalNavigator = global.navigator

    beforeEach(() => {
      // Create a new object with all properties of original navigator
      const newNavigator = {
        ...originalNavigator,
        language: 'en-US',
        systemLanguage: 'es-MX',
      }
      // Replace the global navigator with the new object
      Object.defineProperty(global, 'navigator', {
        value: newNavigator,
        configurable: true,
        writable: true,
      })
    })

    afterEach(() => {
      Object.defineProperty(global, 'navigator', {
        value: originalNavigator,
        configurable: true,
        writable: true,
      })
      jest.restoreAllMocks()
    })

    it('should use systemLanguage when browser is M (IE)', () => {
      expect(fingerprintModule['getLanguageCode']('Windows Trident rv:11')).toBe('ES')
    })

    it('returns first 2 letters uppercased for non-IE', () => {
      expect(fingerprintModule['getLanguageCode']('Chrome')).toBe('EN')
    })

    it('returns first 2 letters uppercased for fallback IE', () => {
      //jest.spyOn(fingerprintModule, 'getBrowserId').mockReturnValue('X')
      expect(fingerprintModule['getLanguageCode']('Trident')).toBe('EN')
    })

    it('falls back to language when systemLanguage is undefined', () => {
      navigator['systemLanguage'] = undefined
      // @ts-ignore
      navigator['language'] = 'en-US'
      //jest.spyOn(fingerprintModule, 'getBrowserId').mockReturnValue('M')

      expect(fingerprintModule['getLanguageCode']('some-agent')).toBe('EN')
    })
  })

  describe('getCookiesEnabled', () => {
    it('returns 1 if cookies enabled', () => {
      Object.defineProperty(navigator, 'cookieEnabled', {
        value: true,
        configurable: true,
      })
      expect(fingerprintModule['getCookiesEnabled']()).toBe(1)
    })

    it('returns 0 if cookies disabled', () => {
      Object.defineProperty(navigator, 'cookieEnabled', {
        value: false,
        configurable: true,
      })
      expect(fingerprintModule['getCookiesEnabled']()).toBe(0)
    })
  })

  describe('getPlatform', () => {
    it('should detect Android', () => {
      expect(fingerprintModule['getPlatform']('Mozilla/5.0 (Linux; Android 10)')).toBe(
        'D',
      )
    })

    it('should detect iPhone', () => {
      expect(
        fingerprintModule['getPlatform'](
          'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        ),
      ).toBe('I')
    })

    it('should detect iPad', () => {
      expect(
        fingerprintModule['getPlatform']('Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X)'),
      ).toBe('P')
    })

    it('should detect Windows', () => {
      expect(
        fingerprintModule['getPlatform']('Mozilla/5.0 (Windows NT 10.0; Win64; x64)'),
      ).toBe('W')
    })

    it('should detect AppleWebKit', () => {
      expect(fingerprintModule['getPlatform']('Mozilla/5.0 AppleWebKit/537.36')).toBe('A')
    })

    it('should detect Blackberry', () => {
      expect(fingerprintModule['getPlatform']('Blackberry 9900')).toBe('B')
    })

    it('should detect Kindle', () => {
      expect(
        fingerprintModule['getPlatform']('Mozilla/5.0 (Linux; U; en-us; Kindle 3.0)'),
      ).toBe('K')
    })

    it('should detect Nokia', () => {
      expect(
        fingerprintModule['getPlatform']('Mozilla/5.0 (Nokia; U; Series60/5.0)'),
      ).toBe('N')
    })

    it('should detect Ericsson', () => {
      expect(fingerprintModule['getPlatform']('EricssonT68/R201')).toBe('E')
    })

    it('should detect Gecko', () => {
      expect(
        fingerprintModule['getPlatform']('Mozilla/5.0 (Gecko/20100101 Firefox/70.0)'),
      ).toBe('G')
    })

    it('should default to unknown', () => {
      expect(fingerprintModule['getPlatform']('SomeRandomAgent')).toBe('U')
    })
  })

  describe('getMarketingId', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'screen', {
        value: { width: 1080, height: 1920 },
        configurable: true,
      })

      Object.defineProperty(navigator, 'platform', {
        value: 'Win32',
        configurable: true,
      })

      Object.defineProperty(navigator, 'cpuClass', {
        value: 'x86',
        configurable: true,
      })

      Object.defineProperty(navigator, 'plugins', {
        value: [{ name: 'PluginA' }, { name: 'PluginB' }],
        configurable: true,
      })
    })

    it('returns 12 character hash (only numbers or A)', () => {
      const id = fingerprintModule['getMarketingId']('FakeUA')
      expect(id).toMatch(/^[0-9A]{12}$/)
    })
  })
})

describe('getBrowserFingerprint', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'navigator', {
      value: {
        userAgent: 'Chrome',
        language: 'en-US',
        cookieEnabled: true,
        platform: 'Win32',
        cpuClass: 'x86', // non-standard
        plugins: [{ name: 'PluginA' }],
      },
      configurable: true,
    })

    Object.defineProperty(window, 'screen', {
      get: () => ({ width: 1920, height: 1080 }),
      configurable: true,
    })
  })

  afterEach(() => {
    jest.restoreAllMocks() // restores all jest.spyOn mocks and property definitions
  })

  it('returns fingerprint in expected format', () => {
    const fingerprint = getBrowserFingerprint()
    expect(fingerprint).toMatch(/^[A-Z][+-]\d{3}[A-Z]{2}[01][A-Z]\|[0-9A]{12}$/)
  })
})
