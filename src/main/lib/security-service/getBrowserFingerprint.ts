const hash = (toHash: string) => {
  let hash = 0
  if (toHash.length === 0) {
    return hash
  }
  for (let i = 0; i < toHash.length; i++) {
    const char = toHash.charCodeAt(i)
    hash = (hash << 5) - hash + char
  }
  return hash
}

const getBrowserId = (userAgent: string) => {
  let browserId = 'U'
  if (userAgent.indexOf('Opera') > -1) {
    browserId = 'O'
  } else if (userAgent.indexOf('Chrome') > -1) {
    browserId = 'C'
  } else if (userAgent.indexOf('Safari') > -1) {
    browserId = 'S'
  } else if (userAgent.indexOf('Firefox') > -1) {
    browserId = 'F'
  } else if (
    userAgent.indexOf('MSIE') > -1 ||
    (userAgent.indexOf('Windows') > -1 &&
      userAgent.indexOf('Trident') > -1 &&
      userAgent.indexOf('rv:11') > -1)
  ) {
    browserId = 'M'
  }

  return browserId
}

const getTimeZoneOffset = () => {
  const timeZone = new Date()
  let timeZoneOffset = (-1 * timeZone.getTimezoneOffset()).toString()

  if (timeZoneOffset.length === 2) {
    timeZoneOffset = `0${timeZoneOffset}`
  } else if (timeZoneOffset.length === 1) {
    timeZoneOffset = `00${timeZoneOffset}`
  }

  if (!timeZoneOffset.match(/-/)) {
    timeZoneOffset = `+${timeZoneOffset}`
  }

  return timeZoneOffset
}

const getLanguageCode = (userAgent: string) => {
  let language: string
  if (getBrowserId(userAgent) === 'M') {
    language = navigator['systemLanguage']
  } else {
    language = navigator.language
  }

  return String(language).substring(0, 2).toUpperCase()
}

const getCookiesEnabled = () => {
  return navigator.cookieEnabled ? 1 : 0
}

const getPlatform = (userAgent: string) => {
  let platform = 'U'
  if (userAgent.indexOf('Android') > -1) {
    platform = 'D'
  } else if (userAgent.indexOf('iPhone') > -1) {
    platform = 'I'
  } else if (userAgent.indexOf('iPad') > -1) {
    platform = 'P'
  } else if (userAgent.indexOf('Windows') > -1) {
    platform = 'W'
  } else if (userAgent.indexOf('AppleWebKit') > -1) {
    platform = 'A'
  } else if (userAgent.indexOf('Blackberry') > -1) {
    platform = 'B'
  } else if (userAgent.indexOf('Kindle') > -1) {
    platform = 'K'
  } else if (userAgent.indexOf('Nokia') > -1) {
    platform = 'N'
  } else if (userAgent.indexOf('Ericsson') > -1) {
    platform = 'E'
  } else if (userAgent.indexOf('Gecko') > -1) {
    platform = 'G'
  }

  return platform
}

const getMarketingId = (userAgent: string) => {
  let plugins = ''
  for (let i = 0; i < navigator.plugins.length; i++) {
    plugins += navigator.plugins[i].name
  }

  let marketingId: string = userAgent
  marketingId += window.screen.width
  marketingId += window.screen.height
  marketingId += navigator.platform
  marketingId += navigator['cpuClass']
  marketingId += plugins

  let marketingIdHash = hash(marketingId).toString().substring(0, 12)

  while (marketingIdHash.length < 12) {
    marketingIdHash = `0${marketingIdHash}`
  }

  return marketingIdHash.replace(/-/g, 'A')
}

const getBrowserFingerprint = () => {
  const userAgent = navigator.userAgent

  return `${
    getBrowserId(userAgent) +
    getTimeZoneOffset() +
    getLanguageCode(userAgent) +
    getCookiesEnabled() +
    getPlatform(userAgent)
  }|${getMarketingId(userAgent)}`
}

export default getBrowserFingerprint
