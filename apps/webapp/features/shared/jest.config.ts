import type { Config } from 'jest'
import { getAliasUtils } from '@libraries/utils/node'
const { moduleNameMapper } = getAliasUtils()

const config: Config = {
  rootDir: './',
  testMatch: ["<rootDir>/src/**/*.test.[jt]s?(x)"],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
    ...moduleNameMapper,
  },
}

export default config
