const { defineConfig } = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const json = require('@rollup/plugin-json')
const typescript = require('rollup-plugin-typescript2')
const babel = require('@rollup/plugin-babel')
const clear = require('rollup-plugin-clear')
const glob = require('fast-glob')
const path = require('path')
const fs = require('fs')

const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "package.json"), "utf-8"));

const aliases = pkg.imports
    ? Object.entries(pkg.imports).map(([find, replacement]) => ({
        find,
        replacement: path.resolve(process.cwd(), replacement),
    }))
    : [];

let inputs = glob.sync([
    'src/index.{ts,tsx,js}',
    'src/runner.{ts,tsx,js}',
]);

const ignorePatterns = [
    '!src/stories',
    '!src/@types',
    '!src/**/*.test.ts',
    '!src/**/*.ignore.*',
    '!src/**/*.stories.*',
    '!src/**/*.{css,scss,sass}',
    '!src/**/*.{mdx,avif,svg,png,jpg,jpeg,gif,webp}',
]

// Si no existe src/index.ts(x), entonces buscamos src/*/index.ts(x)
if (inputs.length === 0) {
    inputs = glob.sync([
        'src/*/index.{ts,tsx,js}',
    ]);
}

inputs = glob.sync([
    ...inputs,
    ...ignorePatterns,
]);

const extensions = ['.js', '.ts', '.tsx'];

const rollupConfig = defineConfig({
    input: inputs,
    output: [
        {
            dir: 'lib/cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
            preserveModules: true,
            preserveModulesRoot: 'src',
        },
        {
            dir: 'lib/esm',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
        },
    ],
    external: [
        "react",
        "react-dom",
        "react-router",
        "react-router-dom",
        "tslib",
    ],
    plugins: [
        clear({targets: ['lib'], watch: true}),
        alias({entries: aliases}),
        resolve({extensions, browser: true}),
        commonjs(),
        json(),
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                compilerOptions: {
                    rootDir: 'src',
                    declaration: true,
                    declarationDir: 'lib/types',
                }
            },
        }),
        babel({
            extensions,
            babelHelpers: 'bundled',
            include: ['src/**/*'],
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                ["@babel/preset-react", {runtime: "automatic"}]
            ]
        }),
        //terser(),
    ],
});

module.exports = rollupConfig;