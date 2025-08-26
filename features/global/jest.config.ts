import type { Config } from 'jest'
import { generateAlias } from '@webapp/shared/node-utils'
const { moduleNameMapper } = generateAlias()

const config: Config = {
  rootDir: './',
  testMatch: ["<rootDir>/src/**/*.test.[jt]s?(x)"],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
    ...moduleNameMapper,
  },
}

export default config
