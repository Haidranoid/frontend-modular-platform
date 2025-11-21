#!/usr/bin/env node

const { spawn } = require('child_process')
const { rollupBinPath, rollupConfigPath } = require('@configs/rollup')


function runner() {

  const args = process.argv.slice(2)

  const child = spawn('node', [rollupBinPath, '--config', rollupConfigPath, ...args], {
    stdio: 'inherit',
    //shell: true,
  })

  child.on('exit', (code) => process.exit(code ?? 1))
}

runner()
