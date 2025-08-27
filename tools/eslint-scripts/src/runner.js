#!/usr/bin/env node

import { spawn } from 'child_process'
import { eslintBinPath, eslintConfigPath } from '@configs/eslint'

//import { createRequire } from 'module'
//const require = createRequire(import.meta.url);

// The first two args will be node.exe and the script itself
let args = process.argv.slice(2)

//console.log({args})
// Ejecuta ESLint usando Node, apuntando al bin y al config de lint-config
spawn(
  'node',
  [
    eslintBinPath, // path absoluto al bin de eslint dentro de @tools/lint-config
    '--config',
    eslintConfigPath, // path absoluto al eslint.config.mjs
    ...args,
  ],
  {
    stdio: 'inherit', // que se vea la salida en la consola
    shell: true, // necesario en Windows
  },
)
