#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')
const { jestBinPath, jestConfigPath } = require('@configs/jest')

/**
 * Busca un archivo de config personalizado (.ts o .js) en el cwd
 */
function resolveCustomConfig() {
  const cwd = process.cwd()
  const tsConfig = path.join(cwd, 'jest.config.ts')
  const jsConfig = path.join(cwd, 'jest.config.js')

  if (fs.existsSync(tsConfig)) return tsConfig
  if (fs.existsSync(jsConfig)) return jsConfig
  return null
}


function runner() {
  const customConfig = resolveCustomConfig()
  const finalConfigPath = customConfig || jestConfigPath

  const args = process.argv.slice(2)

  const child = spawn('node', [jestBinPath, '--config', finalConfigPath, ...args], {
    stdio: 'inherit',
    shell: true,
  })

  child.on('exit', (code) => process.exit(code ?? 1))
}

runner()
