// webpack.common.ts
//const { getAliasUtils } = require('@libraries/utils/node')
const path = require('path')

//const tsconfigPathsPlugin = require('./plugins/TsConfigPathsPlugin')
const dotEnvPlugin = require('./plugins/DotEnvPlugin')
const htmlWebpackPlugin = require('./plugins/HtmlWebpackPlugin')
const nodePolyfillPlugin = require('./plugins/NodePolyfillPlugin')
const bufferPlugin = require('./plugins/BufferPlugin')
const {
  MiniCssExtractPlugin,
  miniCssExtractPlugin,
} = require('./plugins/MiniCssExtractPlugin')
const { ROOT_DIR } = require('./constants')

//const { webpackAlias } = getAliasUtils()

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
    fullySpecified: false,
    fallback: {
      buffer: require.resolve('buffer/'),
    },
    alias: {
      ...{}
    },
  },
  externals: {
    typescript: 'typescript',
  },
  plugins: [
    dotEnvPlugin,
    htmlWebpackPlugin,
    nodePolyfillPlugin,
    miniCssExtractPlugin,
    bufferPlugin,
  ],
}

module.exports = commonConfig
