const fs = require('fs')
const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')

const rootDir = path.resolve(process.cwd())

const loadBaseConfig = () => {
  //console.log({rootDir});
  const baseConfig = {
    rootDir,
    verbose: true,
    transform: {
      //'^.+\\.[jt]sx?$|\\.mjs$|\\.cjs$': [
      '^.+\\.[jt]sx?$': [
        'babel-jest', { configFile: path.resolve(__dirname, 'babel.config.js') }],
    },
    testMatch: [],
    //extensionsToTreatAsEsm: ['.ts', '.tsx'],
    // add global mocks (e.g., globalThis.global)
    setupFiles: [path.join(__dirname, 'jest-global-mocks.js')],
    // Setups for RTL, Jest matchers, etc.
    setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
    testPathIgnorePatterns: [
      `${rootDir}/lib/*`,
      `${rootDir}/dist/*`,
      `${rootDir}/coverage/*`,
    ],
    transformIgnorePatterns: [],
    moduleNameMapper: {}
  }
  return baseConfig
}

function loadTSConfig() {
  const tsconfigPath = path.join(process.cwd(), 'tsconfig.json')
  if (!fs.existsSync(tsconfigPath)) return {}
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'))
  return tsconfig.compilerOptions || {}
}

function createModuleNameMapper() {
  const compilerOptions = loadTSConfig();
  if (!compilerOptions.paths) return {};

  const mapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: `${rootDir}/` });

  const normalizedMapper = Object.fromEntries(
    Object.entries(mapper).map(([key, value]) => {
      const normalizedValue = Array.isArray(value)
        ? value.map(v => v.replace(/\\/g, '/'))
        : value.replace(/\\/g, '/');
      return [key, normalizedValue];
    })
  );

  return normalizedMapper;
}

function mergeConfigs(base, customConfig) {
  if (!customConfig) return base

  return {
    ...base,
    ...customConfig,
    transform: {
      ...(base.transform || {}),
      ...(customConfig.transform || {})
    },
    testMatch: [
      ...(base.testMatch || []),
      ...(customConfig.testMatch || []),
    ],
    setupFiles: [
      ...(base.setupFiles || []),
      ...(customConfig.setupFiles || []),
    ],
    setupFilesAfterEnv: [
      ...(base.setupFilesAfterEnv || []),
      ...(customConfig.setupFilesAfterEnv || []),
    ],
    testPathIgnorePatterns: [
      ...(base.testPathIgnorePatterns || []),
      ...(customConfig.testPathIgnorePatterns || []),
    ],
    transformIgnorePatterns: [
      ...(base.transformIgnorePatterns || []),
      ...(customConfig.transformIgnorePatterns || []),
    ],
    moduleNameMapper: {
      ...(base.moduleNameMapper || {}),
      ...(customConfig.moduleNameMapper || {}),
    },
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
  const baseConfig = loadBaseConfig()
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
