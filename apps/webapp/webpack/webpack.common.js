// webpack.common.ts
//const { getAliasUtils } = require('@libraries/utils/node')
const path = require('path')
const { generateAlias } = require('@webapp/shared/node-utils')
const processPlugin = require('./plugins/ProcessPlugin')
const dotEnvPlugin = require('./plugins/DotEnvPlugin')
const htmlWebpackPlugin = require('./plugins/HtmlWebpackPlugin')
const nodePolyfillPlugin = require('./plugins/NodePolyfillPlugin')
const bufferPlugin = require('./plugins/BufferPlugin')
const {
  MiniCssExtractPlugin,
  miniCssExtractPlugin,
} = require('./plugins/MiniCssExtractPlugin')
const { ROOT_DIR } = require('./constants')

const { webpackAlias } = generateAlias()

//console.log({webpackAlias})
const commonConfig = {
  target: 'web',
  entry: [
    path.resolve(ROOT_DIR, 'src/main/index.tsx'),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
            plugins: [],
          },
        },
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //plugins: [tsconfigPathsPlugin],
    plugins: [],
    fallback: {
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser.js'),
    },
    alias: {
        ...webpackAlias,
        //axios: require.resolve("axios/dist/axios.js"),
    },
    //exportsFields: ["exports"],
    //importsFields: ["imports"],
    //mainFields: ["exports", "imports"],
      // 👇 orden en que webpack va a evaluar package.json "exports"
      /*
      conditionNames: [
          "browser",   // para web builds
          "import",    // si es import ESM
          "require",   // si es require CJS
          "default"    // fallback
      ],
      // 👇 si usas package.json "imports" (subpaths con #)
      byDependency: {
          esm: { conditionNames: ["import", "browser", "default"] },
          commonjs: { conditionNames: ["require", "browser", "default"] },
      },
      // 👇 ignora que te pidan rutas 100% fully specified (con .js/.mjs)
      fullySpecified: false,
       */
  },
  externals: {
    //typescript: 'typescript',
    //'@webapp/shared/node-utils': 'commonjs @webapp/shared/node-utils',
  },
  plugins: [
    dotEnvPlugin,
    processPlugin,
    htmlWebpackPlugin,
    nodePolyfillPlugin,
    miniCssExtractPlugin,
    bufferPlugin,
  ],
}

module.exports = commonConfig
