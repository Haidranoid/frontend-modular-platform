const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')

function getImportsAliases() {
    let aliases = []
    let dtsAliases = []

    const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));

    if (!pkg.imports) return {aliases, dtsAliases};

    aliases = Object.entries(pkg.imports).map(([find, target]) => ({
        find,
        replacement: path.resolve(process.cwd(), target),
    }));

    dtsAliases = [
        ...aliases,
        {
            find: '@libraries/ui',
            replacement: path.resolve(__dirname, '../../../../libraries/ui/dist')
        },
        {
            find: '@libraries/utils',
            replacement: path.resolve(__dirname, '../../../../libraries/utils/dist')
        },
        /*
        {
            find: '@webapp/shared',
            replacement: path.resolve(__dirname, '../../../../features/shared/src')
        },*/
    ]

    return { aliases, dtsAliases }
}

function getExternalDependencies() {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));

    return [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ]
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
    getImportsAliases,
    getExternalDependencies,
    getInputs,
}