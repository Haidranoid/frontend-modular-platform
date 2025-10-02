const path = require("path");
const fs = require("fs");
const { defineConfig } = require("rollup");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const alias = require("@rollup/plugin-alias");
const json = require("@rollup/plugin-json");
const babel = require("@rollup/plugin-babel");
const clear = require("rollup-plugin-clear");
const { dts } = require("rollup-plugin-dts");
const typescript = require("@rollup/plugin-typescript");
const {
  loadTSConfig,
  getBundlerConfigs,
  getPathsAlias,
  getExternalDependencies,
  getTypesToInclude,
} = require("./rollup-utils");

//const extensions = [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"];
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const srcBundlerConfig = getBundlerConfigs();
const externalDependencies = getExternalDependencies();
const pathAliases = getPathsAlias();
const { paths, baseUrl, tsConfigPath } = loadTSConfig();
const depsTypesToInclude = getTypesToInclude();

console.log({ srcBundlerConfig });
console.log({ externalDependencies });
console.log({ pathAliases });
console.log({ paths, tsConfigPath });
console.log({ depsTypesToInclude });

/** @type {import('rollup').RollupOptions[]} */
const baseConfig = defineConfig([
  {
    input: srcBundlerConfig.entries,
    external: externalDependencies,
    context: "window", // o 'window' si solo es para browser
    output: [
      {
        dir: srcBundlerConfig.outputDirs.cjs,
        format: "commonjs",
        sourcemap: false,
        exports: "named",
        interop: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].cjs",
      },
      {
        dir: srcBundlerConfig.outputDirs.esm,
        format: "esm",
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].mjs",
      },
    ],
    plugins: [
      clear({ targets: ["dist"], watch: true }),
      alias({ entries: pathAliases }),
      resolve({ extensions, browser: true }),
      commonjs(),
      json(),
      babel({
        extensions,
        babelHelpers: "runtime", // 🔥
        include: ["src/**/*"],
        //exclude: "node_modules/**",
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
    input: srcBundlerConfig.entries,
    external: externalDependencies,
    output: [
      { file: srcBundlerConfig.outputDirs.cjs + "/index.d.cts" },
      { file: srcBundlerConfig.outputDirs.esm + "/index.d.mts" },
    ],
    plugins: [
      dts({
        respectExternal: true,
        //includeExternal: depsTypesToInclude,
        tsconfig: tsConfigPath,
        compilerOptions: {
          baseUrl,
          paths,
        },
      }),
    ],
  },
  {
    input: srcBundlerConfig.entries,
    external: [/./i],
    output: {
      dir: srcBundlerConfig.outputDirs.types,
    },
    plugins: [
      typescript({
        tsconfig: tsConfigPath,
        compilerOptions: {
          sourceMap: false,
          emitDeclarationOnly: true,
          declarationDir: srcBundlerConfig.outputDirs.types,
        },
      }),
    ],
  },
]);

const loadRollupConfig = () => {
  const tsConfigPath = path.join(process.cwd(), "rollup.config.ts");
  const jsConfigPath = path.join(process.cwd(), "rollup.config.js");

  let customRollupConfig = [];

  if (fs.existsSync(tsConfigPath)) {
    customRollupConfig = require(tsConfigPath).default || require(tsConfigPath);
  } else if (fs.existsSync(jsConfigPath)) {
    customRollupConfig = require(jsConfigPath);
  }

  return [...baseConfig, ...customRollupConfig];
};

const rollupConfig = loadRollupConfig();

module.exports = rollupConfig;
