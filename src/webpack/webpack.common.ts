// webpack.common.ts
import type { WebpackConfiguration } from 'webpack-cli'
import * as path from 'path'
import bufferPlugin from './plugins/BufferPlugin'
import tsconfigPathsPlugin from './plugins/TsConfigPathsPlugin'
import dotEnvPlugin from './plugins/DotEnvPlugin'
import htmlWebpackPlugin from './plugins/HtmlWebpackPlugin'
import nodePolyfillPlugin from './plugins/NodePolyfillPlugin'
import MiniCssExtractPlugin, {
  miniCssExtractPlugin,
} from './plugins/MiniCssExtractPlugin'
import { ROOT_DIR } from './constants'
import getAliasMappings from '../../utils/getAliasMappings'

const commonConfig: WebpackConfiguration = {
  target: ['web', 'es5'],
  entry: [
    'core-js',
    'regenerator-runtime/runtime',
    path.resolve(ROOT_DIR, 'src/main/index.tsx'),
  ],
  module: {
    rules: [
      {
        test: /\.m?(js|ts)x?$/,
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
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [tsconfigPathsPlugin],
    fallback: {
      buffer: require.resolve('buffer/'),
    },
    fullySpecified: false,
    alias: getAliasMappings().webpackAlias,
  },
  plugins: [
    dotEnvPlugin,
    htmlWebpackPlugin,
    nodePolyfillPlugin,
    miniCssExtractPlugin,
    bufferPlugin,
  ],
}

export default commonConfig
