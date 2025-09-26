module.exports = {
  "verbose": true,
  "preset": "ts-jest",
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testEnvironment": "jsdom",
  "setupFiles": [
    "C:\\Users\\Haidranoid16\\WebstormProjects\\react-base-project\\configs\\jest\\src\\configs\\jest-global-mocks.js"
  ],
  "setupFilesAfterEnv": [
    "C:\\Users\\Haidranoid16\\WebstormProjects\\react-base-project\\configs\\jest\\src\\configs\\jest.setup.js"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/lib/*",
    "<rootDir>/dist/*",
    "<rootDir>/coverage/*",
    "<rootDir>/node_modules/*"
  ],
  "rootDir": "./",
  "testMatch": [
    "<rootDir>/src/**/*.test.[jt]s?(x)"
  ],
  "moduleNameMapper": {}
}