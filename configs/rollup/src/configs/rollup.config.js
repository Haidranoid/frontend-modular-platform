const commonjs = require('@rollup/plugin-commonjs')
const alias = require('@rollup/plugin-alias')
const json = require('@rollup/plugin-json')
const babel = require('@rollup/plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const clear = require('rollup-plugin-clear')
const { dts } = require('rollup-plugin-dts')
const { getRollupConfig } = require('./rollup.utils')

const rollupConfigUtils = getRollupConfig()

const {
  input: { sourceInputs, testUtilsInputs },
  extensions,
  external,
  outputs: {
    esmDirOutput,
    commonjsDirOutput,
    typesOutputFilename,
    testUtilsDirOutput,
    testUtilsOutputFilename,
  },
  babelConfig: { tsPathsAlias },
  tsConfigFile,
} = rollupConfigUtils

//console.log({rollupConfigUtils});
/** @type {import('rollup').RollupOptions[]} */
const rollupConfig = [
  {
    input: sourceInputs,
    external,
    context: 'window',
    output: [
      {
        dir: commonjsDirOutput,
        format: 'commonjs',
        exports: 'named',
        interop: 'auto',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].cjs',
      },
      {
        dir: esmDirOutput,
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
      },
    ],
    plugins: [
      clear({ targets: ['lib'], watch: true }),
      alias({ entries: tsPathsAlias }),
      resolve({ extensions, browser: true }),
      commonjs(),
      json(),
      babel({
        extensions,
        babelHelpers: 'runtime',
        include: ['src/**/*'],
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
        plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
      }),
      //terser(),
    ],
  },
  {
    input: sourceInputs,
    external,
    output: [{ file: typesOutputFilename, format: 'es' }],
    plugins: [
      dts({
        tsconfig: tsConfigFile.tsConfigPath,
        compilerOptions: {
          baseUrl: tsConfigFile.baseUrl,
          paths: tsConfigFile.paths,
        },
      }),
    ],
  },
]

module.exports = rollupConfig

/*
{
    input: testUtilsInputs,
    context: "window",
    external,
    output: [
      {
        dir: testUtilsDirOutput,
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src/testing-utils",
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [
      clear({ targets: ["lib/testing-utils"], watch: true }),
      alias({ entries: tsPathsAlias }),
      commonjs(),
      json(),
      resolve({ extensions, browser: true }),
      babel({
        extensions,
        babelHelpers: "runtime",
        include: ["src/**/ //*"],
/*
presets: [
  ["@babel/preset-env", { modules: false }],
  "@babel/preset-typescript",
  ["@babel/preset-react", { runtime: "automatic" }],
],
  plugins: [["@babel/plugin-transform-runtime", { useESModules: true }]],
}),
//terser(),
],
},
{
  input: testUtilsInputs,
    external,
    output: [{ file: testUtilsOutputFilename, format: "es" }],
  plugins: [
  dts({
    tsconfig: tsConfigFile.tsConfigPath,
    compilerOptions: {
      baseUrl: tsConfigFile.baseUrl,
      paths: tsConfigFile.paths,
    },
  }),
],
},
 */
