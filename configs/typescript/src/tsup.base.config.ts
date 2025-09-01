/*import type {Options} from 'tsup'
// @ts-ignore
import {importsRewritePlugin} from "./tsup-plugins/importsResolverPlugin.ts";



const entriesForDualOutput = [
    'src',
    '!src/types', // avoid to compile src/types folder
    ...baseIgnoreCompilePatterns
]

const entriesForDtsOutput = [
    'src',
    ...baseIgnoreCompilePatterns,
]

export const dualOutputOptions: Options[] = [
    {
        entry: entriesForDualOutput,
        format: ['cjs'],
        outDir: 'lib/cjs',
        sourcemap: false,
        clean: true,
        dts: false,
        target: 'es2022',
        esbuildPlugins: [importsRewritePlugin()],
        bundle: false,
    },
    {
        entry: entriesForDualOutput,
        format: ['esm'],
        outDir: 'lib/esm',
        splitting: false,
        sourcemap: false,
        clean: true,
        dts: false,
        target: 'es2022',
        outExtension: () => ({js: '.js'}),
        esbuildPlugins: [importsRewritePlugin()],
        bundle: false,
    }
]

export const dtsOutputOptions: Options[] = [
    {
        entry: entriesForDtsOutput,
        outDir: 'lib/types',
        bundle: false,
        splitting: false,
        sourcemap: false,
        clean: true,
        dts: {
            only: true,
        }
    },
]

export const getDualOutputOptions = (dts: boolean = true): Options[] => {
    let options: Options[]

    options = [...dualOutputOptions]

    if (dts) {
        options = [...options, ...dtsOutputOptions]
    }

    return options
}


 */