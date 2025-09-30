const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')
const ts = require("typescript");

const pkg = JSON.parse(fs.readFileSync('package.json'), 'utf-8');

function loadTSConfig() {
  //const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
  const configFile = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname("."),
  );

  const {
    options: { paths, baseUrl },
  } = parsed;

  return { paths, baseUrl };
}

function getAliases() {
    const { paths } = loadTSConfig()

    const aliases = Object.entries(paths || {}).map(([find, target]) => ({
        find,
        replacement: path.resolve(target[0]),
    }));

    return aliases
}

function getExternalDependencies() {
    let baseExternalDependencies = [
        '@reduxjs/toolkit',
        //'jest',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'redux',
        'styled-components',
        /^(?:@storybook\/|storybook\/).*/i,
        /.*@testing-library.*/i,
    ]

    const externalDependencies = new Set([
        ...baseExternalDependencies,
        //...Object.keys( pkg.peerDependencies || {}),
        ...Object.keys({}),
    ])

    return [...externalDependencies]
}

function getTypesToInclude() {
    //const depsTypesToInclude = Object.keys(pkg.dependencies || {})
    const depsTypesToInclude = Object.keys( {})
      .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])

    return depsTypesToInclude
}

function getBundlerConfigs() {
    const baseOutputDir = 'dist'
    const commonjsOutputDir = baseOutputDir + '/commonjs'
    const esmOutputDir = baseOutputDir + '/esm'

    const ignorePatterns = [
      "!src/stories",
      "!src/@types",
      "!src/**/*.test.{js,jsx,ts,tsx}",
      "!src/**/*.ignore.*",
      "!src/**/*.stories.*",
      "!src/**/*.{css,scss,sass}",
      "!src/**/*.{mdx,avif,svg,png,jpg,jpeg,gif,webp}",
    ];

  const srcBundlerConfig = {
      entries: glob.sync([
        './src/index.ts',
        ...ignorePatterns,
      ]),
      outputDirs: {
        cjs: commonjsOutputDir,
        esm: esmOutputDir,
      }
    }

    //if (inputs.length === 0) {
    //    inputs = glob.sync(['./src/*/index.{ts,tsx,js}',]);
    //}

    return srcBundlerConfig
}

module.exports = {
    loadTSConfig,
    getAliases,
    getExternalDependencies,
    getBundlerConfigs,
    getTypesToInclude
}