/** @type {import('jest').default.exports.Config} */
export default {
  testEnvironment: 'jest-fixed-jsdom',
  testMatch: ['<rootDir>/src/**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '<rootDir>/.storybook/setupTests.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/temp/*',
    '<rootDir>/src/legacy/*',
    '<rootDir>/src/experimental/*',
  ],
}
