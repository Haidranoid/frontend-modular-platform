const path = require('path')
const {defineConfig} = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const json = require('@rollup/plugin-json')
const babel = require('@rollup/plugin-babel')
const clear = require('rollup-plugin-clear')
const {dts} = require('rollup-plugin-dts')
const {getInputs, getImportsAliases, getExternalDependencies} = require('./rollupUtils');


const inputs = getInputs()
const importsAliases = getImportsAliases()
const externalDependencies = getExternalDependencies()
const extensions = ['.js', '.ts', '.tsx'];

const rollupConfig = defineConfig([
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
        external: [
            'react',
            'react-dom',
            'react-router',
            'react-router-dom',
            'redux',
            'tslib',
        ],
        plugins: [
            clear({targets: ['dist'], watch: true}),
            alias({entries: importsAliases}),
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
        output: [
            {
                dir: 'dist',
                format: 'es',
            }
        ],
        plugins: [
            alias({
                entries: [
                    ...importsAliases,
                    {
                        find: '@libraries/ui',
                        replacement: path.resolve(__dirname, '../../../../libraries/ui/src')
                    },
                    {
                        find: '@libraries/utils',
                        replacement: path.resolve(__dirname, '../../../../libraries/utils/src')
                    },
                    /*
                    {
                        find: '@webapp/shared',
                        replacement: path.resolve(__dirname, '../../../../features/shared/src')
                    },*/
                ]
            }),
            dts()
        ],
    },
]);

module.exports = rollupConfig;