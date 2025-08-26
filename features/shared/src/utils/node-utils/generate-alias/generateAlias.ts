import * as path from 'path'
import * as fs from 'fs'
import ts from 'typescript'

/*
let ts;
if (typeof window === 'undefined') {
  ts = require('typescript');
}
*/

interface AliasMappings {
  paths?: Record<string, string>
  webpackAlias: Record<string, string>
  moduleNameMapper: Record<string, string>
}

const ROOT_DIR = process.cwd()

export const generateAlias = (write = true) => {
  const webpackAlias: Record<string, string> = {}
  const moduleNameMapper: Record<string, string> = {}

  const outputPath = path.join(ROOT_DIR, 'alias.mappings.json')
  const configPath = path.join(ROOT_DIR, 'tsconfig.json')
  const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
  )

  const {
    options: { paths },
  } = parsed

  //console.log({ paths })
  if (!paths) return { webpackAlias, moduleNameMapper }

  // @ts-ignore
  Object.entries(paths).forEach(([aliasKey, [targetPath]]) => {
    const alias = aliasKey.replace(/\/\*$/, '')

    const cleanedRelativePath = targetPath
      .replace(/\/(index|App)\.(ts|tsx|js|jsx)$/, '') // remove file endings
      .replace(/\/\*$/, '') // remove wildcard

    // webpack alias
    webpackAlias[alias] = path.resolve(ROOT_DIR, cleanedRelativePath) + path.sep

    // Ensure trailing slash in a mapper path
    moduleNameMapper[`^${alias}/(.*)$`] =
      path.resolve(ROOT_DIR, cleanedRelativePath) + path.sep + '$1'

    moduleNameMapper[`^${alias}$`] =
      path.resolve(ROOT_DIR, cleanedRelativePath) + path.sep + 'index.ts'
  })

  if (write) {
    fs.writeFileSync(
      outputPath,
      JSON.stringify({ webpackAlias, moduleNameMapper }, null, 2),
      'utf-8',
    )
  }

  return { webpackAlias, moduleNameMapper }
}
