const path = require("path");
const fs = require("fs");
const {defineConfig} = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const json = require('@rollup/plugin-json')
const babel = require('@rollup/plugin-babel')
const clear = require('rollup-plugin-clear')
const nodePolyfills = require('rollup-plugin-polyfill-node')
const {dts} = require('rollup-plugin-dts')
const {getInputs, getAliases, getExternalDependencies} = require('./rollup-utils');

const inputs = getInputs()
const { importAliases, dtsAliases} = getAliases()
const externalDependencies = getExternalDependencies()
const extensions = ['.js', '.ts', '.tsx'];

console.log({externalDependencies})
console.log({importAliases, dtsAliases})
const baseConfig = defineConfig([
    {
        input: inputs,
        output: [
            {
                dir: 'dist',
                format: 'cjs',
                sourcemap: true,
                exports: 'named',
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].cjs',
            },
            {
                dir: 'dist',
                format: 'esm',
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: 'src',
                entryFileNames: '[name].mjs',
            },
        ],
        external: externalDependencies,
        context: 'globalThis', // o 'window' si solo es para browser
        plugins: [
            clear({targets: ['dist'], watch: true}),
            alias({entries: importAliases}),
            resolve({extensions, browser: true}),
            commonjs(),
            json(),
            babel({
                extensions,
                babelHelpers: 'bundled',
                include: ['src/**/*'],
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    ['@babel/preset-react', {runtime: 'automatic'}]
                ]
            }),
            //terser(),
        ],
    },
    {
        input: inputs,
        external: externalDependencies,
        output: [
            {
                dir: 'dist',
                format: 'es',
            }
        ],
        context: 'globalThis', // o 'window' si solo es para browser
        plugins: [
            alias({ entries: dtsAliases }),
            dts({
              respectExternal: true
            })
        ],
    },
]);

const loadRollupConfig = () => {
    const tsConfigPath = path.join(process.cwd(), 'rollup.config.ts')
    const jsConfigPath = path.join(process.cwd(), 'rollup.config.js')

    let customRollupConfig = []

    if (fs.existsSync(tsConfigPath)) {
        customRollupConfig = require(tsConfigPath).default || require(tsConfigPath)
    } else if (fs.existsSync(jsConfigPath)) {
        customRollupConfig = require(jsConfigPath)
    }

    return [
        ...baseConfig,
        ...customRollupConfig,
    ]
}

const rollupConfig = loadRollupConfig()

module.exports = rollupConfig;