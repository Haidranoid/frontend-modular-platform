import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'

export function getImportsAliases() {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));

    if (!pkg.imports) return [];
    return Object.entries(pkg.imports).map(([find, target]) => ({
        find,
        replacement: path.resolve(process.cwd(), target),
    }));
}

export function getExternalDependencies() {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));

    return [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ]
}

export function getInputs() {
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