const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')
const ts = require('typescript')

function readPackageJsonConfigFile() {
  return JSON.parse(fs.readFileSync('package.json', { encoding: 'utf-8' }))
}

function getTSConfigFile() {
  const tsConfigPath = path.join(process.cwd(), 'tsconfig.json')
  const configFile = ts.readConfigFile(path.resolve(tsConfigPath), ts.sys.readFile)
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(path.resolve(tsConfigPath, 'tsconfig.json')),
  )

  const {
    options: { baseUrl, paths },
  } = parsed
  return { baseUrl, paths, tsConfigPath }
}

function generateFullPathsAlias(tsPathsAlias) {
  return Object.entries(tsPathsAlias || {}).map(([find, target]) => ({
    find,
    replacement: path.resolve(target[0]),
  }))
}

function escapeRegex(peerDependencie) {
  return peerDependencie.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getExternalDependencies(pkgConfigFile) {
  const externalDependencies = Object.keys(pkgConfigFile.peerDependencies || {}).map(
    (peerDependency) => new RegExp(`^${escapeRegex(peerDependency)}(\\/.*)?$`),
  )

  return [...externalDependencies]
}

function getSourceInputs() {
  const srcEntryPoint = 'src/index.ts'
  const ignorePatterns = [
    '!src/**/*.test.*',
    '!src/**/*.ignore.*',
    '!src/**/*.stories.*',
    '!src/**/*.{css,scss,sass}',
    '!src/**/*.{mdx,avif,svg,png,jpg,jpeg,gif,webp}',
  ]

  return glob.sync([srcEntryPoint, ...ignorePatterns])
}

function getTestUtilsInputs() {
  const testUtilsEntryPoint = 'src/testing-utils/index.ts'
  const ignorePatterns = [
    '!src/**/*.test.*',
    '!src/**/*.ignore.*',
    '!src/**/*.stories.*',
    '!src/**/*.{css,scss,sass}',
    '!src/**/*.{mdx,avif,svg,png,jpg,jpeg,gif,webp}',
  ]

  return glob.sync([testUtilsEntryPoint, ...ignorePatterns])
}

function getRollupConfig() {
  const sourceInputs = getSourceInputs()
  const testUtilsInputs = getTestUtilsInputs()
  const pkgConfigFile = readPackageJsonConfigFile()
  const externalDependencies = getExternalDependencies(pkgConfigFile)
  const tsConfigFile = getTSConfigFile()
  const tsPathsAlias = generateFullPathsAlias(tsConfigFile.paths)

  const extensionsToTranspile = ['.js', '.jsx', '.ts', '.tsx']
  const esmDirOutput = 'lib/esm'
  const commonjsDirOutput = 'lib/commonjs'
  const typesOutputFilename = 'lib/types/index.d.ts'

  const testUtilsDirOutput = 'lib/testing-utils'
  const testUtilsOutputFilename = 'lib/testing-utils/index.d.ts'

  return {
    input: {
      sourceInputs,
      testUtilsInputs,
    },
    extensions: extensionsToTranspile,
    external: externalDependencies,
    outputs: {
      esmDirOutput,
      commonjsDirOutput,
      typesOutputFilename,
      testUtilsDirOutput,
      testUtilsOutputFilename,
    },
    babelConfig: {
      tsPathsAlias,
    },
    tsConfigFile,
  }
}

module.exports = {
  getRollupConfig,
}

/*
function getExternalTypesDependencies() {
  const pkgConfigFile = readPackageJsonFromProject();

  const externalDependencies = new Set([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]);

  return [...externalDependencies];
}

function getTypesInputs() {
  const entryPoint = 'dist/types/index.d.ts';

  return glob.sync([entryPoint])
}

 */
