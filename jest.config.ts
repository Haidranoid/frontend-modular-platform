// jest.config.ts
import type { Config } from 'jest'

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
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@test/(.*)$': '<rootDir>/src/test/$1',
    '^@components$': '<rootDir>/src/main/components/index.ts',
    '^@constants$': '<rootDir>/src/main/constants/index.ts',
    '^@pages/(.*)$': '<rootDir>/src/main/pages/$1',
    '^@experimental/(.*)$': '<rootDir>/src/main/experimental/$1',
    '^@layouts/(.*)$': '<rootDir>/src/main/layouts/$1',
    '^@lib/(.*)$': '<rootDir>/src/main/lib/$1',
    '^@router$': '<rootDir>/src/main/router/index.ts',
    '^@actions$': '<rootDir>/src/main/state/actions/index.ts',
    '^@actions-creators$': '<rootDir>/src/main/state/actions-creators/index.ts',
    '^@hooks$': '<rootDir>/src/main/state/hooks/index.ts',
    '^@interfaces$': '<rootDir>/src/main/state/interfaces/index.ts',
    '^@reducers$': '<rootDir>/src/main/state/reducers/index.ts',
    '^@selectors$': '<rootDir>/src/main/state/selectors/index.ts',
    '^@store$': '<rootDir>/src/main/state/store/index.ts',
    '^@styles/(.*)$': '<rootDir>/src/main/styles/$1',
    '^@utils$': '<rootDir>/src/main/utils/index.ts',
    '^@validators$': '<rootDir>/src/main/validators/index.ts',
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
