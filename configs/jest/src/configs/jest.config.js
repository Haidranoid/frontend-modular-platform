const fs = require('fs')
const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')

const baseConfig = {
  rootDir: path.resolve(process.cwd()),
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest', { configFile: path.resolve(__dirname, 'babel.config.js') }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
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

function loadTSConfig() {
  const tsconfigPath = path.join(process.cwd(), 'tsconfig.json')
  if (!fs.existsSync(tsconfigPath)) return {}
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'))
  return tsconfig.compilerOptions || {}
}

function createModuleNameMapper() {
  const compilerOptions = loadTSConfig()
  if (!compilerOptions.paths) return {}
  return pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}

function mergeConfigs(base, customConfig) {
  if (!customConfig) return base

  return {
    ...base,
    ...customConfig,
    transform: { ...(base.transform || {}), ...(customConfig.transform || {}) },
    moduleNameMapper: {
      ...(base.moduleNameMapper || {}),
      ...(customConfig.moduleNameMapper || {}),
    },
    setupFilesAfterEnv: [
      ...(base.setupFilesAfterEnv || []),
      ...(customConfig.setupFilesAfterEnv || []),
    ],
  }
}

function normalizeConfig(config) {
  if (!config) return {}
  return config.default ?? config   // usa config.default si existe, si no config directo
}

function resolveCustomConfig() {
  const cwd = process.cwd()
  const customConfig = path.join(cwd, 'jest.config.js')

  if (fs.existsSync(customConfig))
    return require(customConfig)
  return {}
}

const loadJestConfig = () => {
  const customConfig = normalizeConfig(resolveCustomConfig())
  const finalConfig = mergeConfigs(baseConfig, customConfig)

  finalConfig.moduleNameMapper = {
    ...createModuleNameMapper(),
    ...(finalConfig.moduleNameMapper || {}),
  }

  //console.log({finalConfig});
  return finalConfig
}

const jestConfig = loadJestConfig()

module.exports = jestConfig
