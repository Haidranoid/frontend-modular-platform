#!/usr/bin/env node

import { spawn } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import { jestConfigPath } from '@configs/jest'

/**
 * Resuelve el binario de Jest dentro del package de @configs/jest
 */
import { jestBinPath } from '@configs/jest/bin-paths'

/**
 * Busca un archivo de config personalizado (.ts o .js) en el cwd
 */
function resolveCustomConfig(): string | null {
  const cwd = process.cwd()
  const tsConfig = path.join(cwd, 'jest.config.ts')
  const jsConfig = path.join(cwd, 'jest.config.js')

  if (fs.existsSync(tsConfig)) return tsConfig
  if (fs.existsSync(jsConfig)) return jsConfig
  return null
}

/**
 * Ejecuta Jest con la configuración final
 */
function runJest() {
  const customConfig = resolveCustomConfig()

  // fallback a la config base de configs/jest-config
  //const baseConfig = path.join(
  //    path.dirname(require.resolve('@configs/jest')),
  //'src/jest.config.ts' // importar el TS original para ts-jest
  //);

  const finalConfigPath = customConfig || jestConfigPath

  //console.log('Jest binary:', jestBinPath);
  //console.log('Using config:', finalConfigPath);

  const args = process.argv.slice(2)

  const child = spawn('node', [jestBinPath, '--config', finalConfigPath, ...args], {
    stdio: 'inherit',
    shell: true,
  })

  child.on('exit', (code) => process.exit(code ?? 1))
}

// if (require.main === module) {
runJest()
