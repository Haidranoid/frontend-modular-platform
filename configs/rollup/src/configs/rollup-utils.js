const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')
const ts = require("typescript");

function loadTSConfig() {
  const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
  const configFile = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(tsConfigPath),
  );

  const {
    options: { paths, baseUrl },
  } = parsed;

  return { paths, baseUrl, tsConfigPath };
}

function generateDtsAlias(importAliases, dependencies = []){
    const rushProjectsMap = {
        '@libraries/ui': path.resolve(__dirname, '../../../../libraries/ui/dist'),
        '@libraries/utils': path.resolve(__dirname, '../../../../libraries/utils/dist'),
        '@webapp/shared': path.resolve(__dirname, '../../../../features/shared/dist'),
    }

    const dependenciesMapped = dependencies.map((dep) => ({
        find: dep,
        replacement: rushProjectsMap[dep],
    }))

    return [
        ...importAliases,
        ...dependenciesMapped
    ]
}

function getAliases() {
    let importAliases = []
    let dtsAliases = []

    const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));

    //if (!pkg.imports) return {importAliases, dtsAliases};

    importAliases = Object.entries(pkg.imports || {}).map(([find, target]) => ({
        find,
        replacement: path.resolve(process.cwd(), target),
    }));

    //dtsAliases = generateDtsAlias(importAliases, Object.keys(pkg.dependencies || {}))
    dtsAliases = importAliases

    return { importAliases, dtsAliases }
}

function getExternalDependencies() {
    let externalDependencies = [
        'react',
        'redux',
        'react-dom',
        'react-redux',
        'styled-components',
        'react-router',
        'jest',
        'tslib',
        /storybook\/.*/i,
        /.*@storybook\/.*/i,
        /.*@testing-library.*/i,
    ]

    const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));

    //if (!pkg.peerDependencies) return externalDependencies;

    externalDependencies = [
        ...externalDependencies,
        ...Object.keys(pkg.peerDependencies || {}),
    ]

    return [... new Set(externalDependencies)];
}

function getInputs() {
    let inputs = glob.sync([
        './src/index.ts',
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

    //if (inputs.length === 0) {
    //    inputs = glob.sync(['./src/*/index.{ts,tsx,js}',]);
    //}

    inputs = glob.sync([
        ...inputs,
        ...ignorePatterns,
    ]);

    return inputs
}

module.exports = {
    loadTSConfig,
    getAliases,
    getExternalDependencies,
    getInputs,
}