const path = require("path");
const fs = require("fs");
const { defineConfig } = require("rollup");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const alias = require("@rollup/plugin-alias");
const json = require("@rollup/plugin-json");
const babel = require("@rollup/plugin-babel");
const clear = require("rollup-plugin-clear");
const nodePolyfills = require("rollup-plugin-polyfill-node");
const { dts } = require("rollup-plugin-dts");
const {
  loadTSConfig,
  getInputs,
  getAliases,
  getExternalDependencies,
} = require("./rollup-utils");

const extensions = [".js", ".ts", ".tsx"];
const inputs = getInputs();
const externalDependencies = getExternalDependencies();
const { importAliases, dtsAliases } = getAliases();
const { baseUrl, paths, tsConfigPath } = loadTSConfig();


console.log({ inputs });
console.log({ externalDependencies });
console.log({ importAliases, dtsAliases });
console.log({ baseUrl, paths, tsConfigPath });

const baseConfig = defineConfig([
  {
    input: inputs,
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        interop: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].cjs",
      },
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].mjs",
      },
    ],
    external: externalDependencies,
    context: "globalThis", // o 'window' si solo es para browser
    plugins: [
      clear({ targets: ["dist"], watch: true }),
      alias({ entries: importAliases }),
      resolve({ extensions, browser: true }),
      commonjs(),
      json(),
      babel({
        extensions,
        babelHelpers: "bundled",
        include: ["src/**/*"],
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
      }),
      //terser(),
    ],
  },
  {
    input: inputs,
    external: externalDependencies,
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    context: "globalThis", // o 'window' si solo es para browser
    plugins: [
      //alias({ entries: dtsAliases }),
      dts({
        respectExternal: true,
        includeExternal: ['@webapp/shared'],
        tsconfig: tsConfigPath,
        compilerOptions: {
          paths,
        },
      }),
    ],
  },
]);
console.log({baseConfig});

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
