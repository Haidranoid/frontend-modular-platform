#!/usr/bin/env node

const { spawn } = require('child_process')
const { jestBinPath, jestConfigPath, babelConfigPath } = require('@configs/jest')

function runner() {
  const args = process.argv.slice(2)

  const child = spawn(
    'node',
    [jestBinPath, '--config', jestConfigPath, ...args],
    {
      stdio: 'inherit',
      //shell: true,
    }
  )

  child.on('exit', (code) => process.exit(code ?? 1))
}

//if (require.main === module) {
  runner()
//}