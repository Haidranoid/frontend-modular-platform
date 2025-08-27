// webpack.prod.js
const path = require('path')
const cleanWebpackPlugin = require('./plugins/CleanWebpackPlugin')
const cssMinimizerPlugin = require('./plugins/CssMinimizerPlugin')
const myTerserPlugin = require('./plugins/TerserPlugin')
const { ROOT_DIR } = require('./constants')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  stats: {
    errorDetails: true
  },
  output: {
    clean: true,
    filename: 'webapp.main.[name].[chunkhash].js',
    path: path.resolve(ROOT_DIR, 'dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [myTerserPlugin, cssMinimizerPlugin],
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
}

module.exports = {
    prodConfig,
}
