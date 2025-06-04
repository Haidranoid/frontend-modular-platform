// jest.config.ts
import type { Config } from 'jest'
import getAliasMappings from './utils/getAliasMappings'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // suitable for React Testing Library

  rootDir: './',

  // add global mocks (e.g., globalThis.global)
  setupFiles: ['<rootDir>/jest-global-mocks.ts'],

  // Setups for RTL, Jest matchers, etc.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // If using ESM-style modules and ts-jest 29+
  /*
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  */
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/mocks/assets/fileMocks.js',
    '\\.(css|less)$': '<rootDir>/src/test/mocks/assets/fileMocks.js',
    //'^@app/(.*)$': '<rootDir>/src/main/$1'

    // ⬇️ ORDER MATTERS: longer pattern first
    ...getAliasMappings().moduleNameMapper,
  },

  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 85,
      lines: 90,
      statements: 90,
    },
  },

  collectCoverageFrom: [
    '<rootDir>/src/main/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/main/**/*.d.ts',
    '!<rootDir>/src/main/**/*.types.{ts,tsx}',
    '!<rootDir>/src/main/**/*.styled.{ts,tsx}',
    '!<rootDir>/src/main/**/*.ignore.{js,jsx,ts,tsx}',
  ],

  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Coverage Report',
        includeFailureMsg: true,
        includeConsoleLog: true,
        outputPath: '<rootDir>/public/coverage-report/index.html',
      },
    ],
  ],

  /*
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // for ESM, add { useESM: true } in globals if needed
  },

  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)', // adjust if you need to transform specific deps
  ],*/
}

export default config
