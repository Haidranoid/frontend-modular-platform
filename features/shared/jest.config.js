/** @type {import('jest').Config} */
export default {
  testEnvironment: "jest-fixed-jsdom",
  testMatch: ["<rootDir>/src/**/*.test.[jt]s?(x)"],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
    "<rootDir>/.storybook/setupTests.ts",
  ],
}
