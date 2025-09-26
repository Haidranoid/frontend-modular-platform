const { TextEncoder, TextDecoder } = require('util')

// solo para Jest/Node environment
if (typeof global.TextEncoder === 'undefined') {
  // @ts-ignore
  global.TextEncoder = TextEncoder
  // @ts-ignore
  global.TextDecoder = TextDecoder
}
/*
// Define a minimal Location mock with replace(), assign(), reload()
const url = new URL('http://localhost/')

// --- Full browser environment mocks for Jest ---
class StorageMock {
  private store: Record<string, string> = {}

  clear() {
    this.store = {}
  }
  getItem(key: string) {
    return this.store[key] || null
  }
  setItem(key: string, value: string) {
    this.store[key] = value.toString()
  }
  removeItem(key: string) {
    delete this.store[key]
  }
}

const locationMock = {
  ...url,
  replace: jest.fn(),
  assign: jest.fn(),
  reload: jest.fn(),
  // You can add other properties if needed
}

// Override window.location
Object.defineProperty(window, 'location', {
  writable: true,
  value: locationMock,
})

// Mock localStorage and sessionStorage
Object.defineProperty(window, 'localStorage', {
  value: new StorageMock(),
  writable: true,
})

Object.defineProperty(window, 'sessionStorage', {
  value: new StorageMock(),
  writable: true,
})

// Mock window.matchMedia (often used by responsive libs, MUI, etc.)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
})

// Mock window.scrollTo to avoid errors in tests
window.scrollTo = jest.fn()

// Mock navigator.userAgent (some libs check for this)
Object.defineProperty(window.navigator, 'userAgent', {
  writable: true,
  value: 'node.js',
})

// Optional: mock other common window properties that may cause trouble,
// For example, IntersectionObserver, ResizeObserver, etc., if you use them
*/
