#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')
const { rollupBinPath, rollupConfigPath } = require('@configs/rollup')

/**
 * Busca un archivo de config personalizado (.ts o .js) en el cwd
 */
function resolveCustomConfig() {
  const cwd = process.cwd()
  const tsConfig = path.join(cwd, 'rollup.config.ts')
  const jsConfig = path.join(cwd, 'rollup.config.js')

  if (fs.existsSync(tsConfig)) return tsConfig
  if (fs.existsSync(jsConfig)) return jsConfig
  return null
}


function runner() {
  const customConfig = resolveCustomConfig()
  const finalConfigPath = customConfig || rollupConfigPath

  const args = process.argv.slice(2)

  const child = spawn('node', [rollupBinPath, '--config', finalConfigPath, ...args], {
    stdio: 'inherit',
    shell: true,
  })

  child.on('exit', (code) => process.exit(code ?? 1))
}

runner()
