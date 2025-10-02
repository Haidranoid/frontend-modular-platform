const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')
const ts = require("typescript");

const pkg = JSON.parse(fs.readFileSync('package.json'), 'utf-8');

function loadTSConfig() {
  const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
  const configFile = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname("."),
  );

  const {
    options: { paths, baseUrl },
  } = parsed;

  return { paths, baseUrl, tsConfigPath };
}

function getExternalProjects(){
  const baseExternalProjects = [
    /^@webapp\/.*/i,
  ]

  return baseExternalProjects
}

function getPathsAlias() {
    const { paths } = loadTSConfig()
    const externalProjectsRegExp = getExternalProjects()

    console.log({paths});
    const pathsFiltered = Object.entries(paths || {}).filter(([alias, path]) => {
      for (const projectRegExp of externalProjectsRegExp) {
        if (!projectRegExp.test(alias)) {
          return true
        }
      }
    })

  console.log({pathsFiltered});
    const pathAliases = pathsFiltered.map(([find, target]) => ({
        find,
        replacement: path.resolve(target[0]),
    }));

  console.log({pathAliases});
    return pathAliases
}

function getExternalDependencies() {
    const baseExternalDependencies = [
        '@reduxjs/toolkit',
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'redux',
        'styled-components',
        /^storybook\/.*/i,
        /^@testing-library\/.*/i,
        /^@storybook\/.*/i,
        /^@testing-library.*/i,
        /^@babel\/.*/i,
    ]
    const externalProjectsRegExp = getExternalProjects()

    const externalDependencies = new Set([
        ...baseExternalDependencies,
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        ...externalProjectsRegExp
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
    getPathsAlias,
    getExternalDependencies,
    getBundlerConfigs,
    getTypesToInclude
}