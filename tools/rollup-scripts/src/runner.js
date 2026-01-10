#!/usr/bin/env node

const { spawn } = require('child_process')
const { rollupBinPath, rollupConfigPath } = require('@configs/rollup')

function runner() {
  const args = process.argv.slice(2)

  const child = spawn('node', [rollupBinPath, '--config', rollupConfigPath, ...args], {
    stdio: ['inherit', 'inherit', 'pipe'],
    //shell: true,
  })

  child.stderr.on('data', (chunk) => {
    //console.log("STDERR:", chunk.toString());
    /*
    if (/error|fail/i.test(msg)) {
    process.stderr.write(msg)
    }
    */
    const msg = chunk.toString()
    console.log(msg)
  })

  child.on('exit', (code) => process.exit(code ?? 1))
}

runner()
