const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const alias = require("@rollup/plugin-alias");
const json = require("@rollup/plugin-json");
const babel = require("@rollup/plugin-babel");
const clear = require("rollup-plugin-clear");
const { dts } = require("rollup-plugin-dts");
const {
  getInputs,
  getPathsAlias,
  getExternalDependencies,
  getTSConfigFile,
  getExternalTypesDependencies
} = require("./rollup-utils");

const input = getInputs();
const externals = getExternalDependencies()
const pathAliases = getPathsAlias();
const tsConfigFile = getTSConfigFile();

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const cjsOutDir = "dist/commonjs";
const esmOutDir = "dist/esm";


console.log({ input });
console.log({ externals });
console.log({ pathAliases });

/** @type {import('rollup').RollupOptions[]} */
const rollupConfig = [
  {
    input,
    external: externals,
    context: "window",
    output: [
      {
        dir: cjsOutDir,
        format: "commonjs",
        exports: "named",
        interop: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].cjs",
      },
      {
        dir: esmOutDir,
        format: "esm",
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
        presets: [
          ["@babel/preset-env", { modules: false }],
          "@babel/preset-typescript",
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
        plugins: [
          ["@babel/plugin-transform-runtime", { useESModules: true }]
        ]
      }),
      //terser(),
    ],
  },
  {
    input,
    external: [/node_modules/i],
    output: [
      { file: "dist/commonjs/index.d.cts", format: "cjs" },
      { file: "dist/esm/index.d.mts", format: "es" },
    ],
    plugins: [
      dts({
        respectExternal: true,
        tsconfig: tsConfigFile.tsConfigPath,
        compilerOptions: {
          baseUrl: tsConfigFile.baseUrl,
          paths: tsConfigFile.paths,
        },
      }),
    ],
  },
];

module.exports = rollupConfig;
