import path from 'path'
import ts from 'typescript'
import * as fs from 'node:fs'

const ROOT_DIR = process.cwd()

interface AliasMappings {
  paths?: Record<string, string>
  webpackAlias: Record<string, string>
  moduleNameMapper: Record<string, string>
}

export default function getAliasMappings(writeOutput = true): AliasMappings {
  const outputPath = path.join(ROOT_DIR, 'alias.mappings.json')
  const configPath = path.join(ROOT_DIR, 'tsconfig.base.json')
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
  const {
    config: {
      compilerOptions: { paths },
    },
  } = configFile

  const webpackAlias: Record<string, string> = {}
  const moduleNameMapper: Record<string, string> = {}

  // @ts-ignore
  Object.entries(paths).forEach(([aliasKey, [targetPath]]) => {
    const alias = aliasKey.replace(/\/\*$/, '')

    const cleanedRelativePath = targetPath
      .replace(/\/(index|App)\.(ts|tsx|js|jsx)$/, '') // remove file endings
      .replace(/\/\*$/, '') // remove wildcard

    // webpack alias
    webpackAlias[alias] = path.resolve(ROOT_DIR, cleanedRelativePath) + path.sep

    // Ensure trailing slash in a mapper path
    moduleNameMapper[`^${alias}/(.*)$`] = `<rootDir>/${cleanedRelativePath}/$1`
  })

  const result: AliasMappings = { webpackAlias, moduleNameMapper }

  if (writeOutput) {
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8')
  }
  return result
}

/* Jest alias with index
    const hasWildcard = aliasKey.endsWith('/*')
    const cleanAlias = aliasKey.replace(/\/\*$/, '')
    const relativePath = targetPath.replace(/\/\*$/, '')

    const jestKey = hasWildcard ? `^${cleanAlias}/(.*)$` : `^${cleanAlias}$`
    const jestValue = hasWildcard
      ? `<rootDir>/${relativePath}/$1`
      : `<rootDir>/${relativePath}`

    moduleNameMapper[jestKey] = jestValue
    */
