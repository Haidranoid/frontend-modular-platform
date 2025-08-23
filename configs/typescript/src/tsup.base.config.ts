import type {Options} from 'tsup'

const entriesForDualOutput = [
    'src',
    '!src/stories',
    '!src/@types',
    '!src/**/*.test.ts',
    '!src/**/*.ignore.*',
    '!src/**/*.stories.*',
    '!src/**/*.{css,scss,sass}',
    '!src/**/*.{mdx,avif,svg,png,jpg,jpeg,gif,webp}',
]

export const dualOutputOptions: Options[] = [
    {
        entry: entriesForDualOutput,
        outDir: 'lib/types',
        dts: {
            only: true,
        }
    },
    {
        entry: entriesForDualOutput,
        format: ['cjs'],
        outDir: 'lib/cjs',
        bundle: false,
        sourcemap: false,
        clean: true,
        dts: false,
        target: 'es2022',
        external: ['tslib'],
    },
    {
        entry: entriesForDualOutput,
        format: ['esm'],
        outDir: 'lib/esm',
        bundle: false,
        splitting: false,
        sourcemap: false,
        clean: true,
        dts: false,
        target: 'es2022',
        external: ['tslib'],
        outExtension: () => ({js: '.js'})
    },
]
