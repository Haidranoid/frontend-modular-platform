// webpack.prod.js
import type { WebpackConfiguration } from 'webpack-cli'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import path from 'path'
import cleanWebpackPlugin from './plugins/CleanWebpackPlugin'
//import compressionPlugin from './plugins/CompressionPlugin'
import cssMinimizerPlugin from './plugins/CssMinimizerPlugin'
import terserPlugin from './plugins/TerserPlugin'
import { ROOT_DIR } from './constants'

const prodConfig: WebpackConfiguration & DevServerConfiguration = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    clean: true,
    filename: 'sienmat.main.[name].[chunkhash].js',
    path: path.resolve(ROOT_DIR, 'dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [terserPlugin, cssMinimizerPlugin],
    splitChunks: {
      chunks: 'all',
      minSize: 20000, // tamaño mínimo para dividir
      maxSize: 244000, // fuerza a dividir si pasa de este tamaño (~244 KiB)
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [cleanWebpackPlugin],
  /*optimization: {
    minimize: true,
    minimizer: [terserPlugin, cssMinimizerPlugin],
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },*/
}

export default prodConfig
