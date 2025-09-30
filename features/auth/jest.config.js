/** @type {import('jest').default.exports.Config} */
module.exports = {
  testEnvironment: "jest-fixed-jsdom",
  testMatch: ["<rootDir>/src/**/*.test.[jt]s?(x)"],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
    "<rootDir>/.storybook/setupTests.ts",
  ],
}
