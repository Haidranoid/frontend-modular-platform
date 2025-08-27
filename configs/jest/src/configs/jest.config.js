const path = require('path')
const fs = require('fs')

const baseConfig = {
  verbose: true,
  preset: 'ts-jest',
  // 'jsdom' for browser environments
  testEnvironment: 'jsdom',
  // add global mocks (e.g., globalThis.global)
  setupFiles: [path.join(__dirname, 'jest-global-mocks.js')],
  // Setups for RTL, Jest matchers, etc.
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
  testPathIgnorePatterns: [
    '<rootDir>/lib/*',
    '<rootDir>/dist/*',
    '<rootDir>/coverage/*',
    '<rootDir>/node_modules/*',
  ],
}

const loadJestConfig = () => {
  const tsConfigPath = path.join(process.cwd(), 'jest.config.ts')
  const jsConfigPath = path.join(process.cwd(), 'jest.config.js')

  let customJestConfig = {}

  if (fs.existsSync(tsConfigPath)) {
    customJestConfig = require(tsConfigPath).default || require(tsConfigPath)
  } else if (fs.existsSync(jsConfigPath)) {
    customJestConfig = require(jsConfigPath)
  }

  return {
    ...baseConfig,
    ...customJestConfig,
  }
}

const jestConfig = loadJestConfig()

module.exports = jestConfig
