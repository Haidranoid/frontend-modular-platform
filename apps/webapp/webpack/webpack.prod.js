//import CleanWebpackPlugin from './plugins/CleanWebpackPlugin.js'
import { CssMinimizerPlugin, TerserPlugin, BundleAnalyzerPlugin, BrotliCompressionPlugin, GzipCompressionPlugin, MiniCssExtractPlugin } from './plugins/index.js'

export const prodConfig = {
  mode: 'production',
  //devtool: 'inline-source-map',
  stats: {
    all: false,
    errorDetails: true,
    assets: true,
    errors: true,
    warnings: true,
    timings: true,
    chunkGroups: true,
  },
  output: {
    //filename: 'webapp.main.[name].[chunkhash].js',
    path: process.cwd() + '/dist',
    filename: "js/webapp.[name].[contenthash].js",
    chunkFilename: "js/webapp.[name].[contenthash].chunk.js",
    publicPath: '/',
    clean: true,
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
    minimize: true,
    minimizer: [TerserPlugin, CssMinimizerPlugin],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      maxAsyncRequests: 20,
      minSize: 20000, // tamaño mínimo para dividir
      maxSize: 244000, // fuerza a dividir si pasa de este tamaño (~244 KiB)
      //automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        commons: {
          test: /[\\/]src[\\/]main[\\/]/,
          name: 'commons',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
      //runtimeChunk: "single", // runtime separado
    },
  },
  plugins: [MiniCssExtractPlugin, BrotliCompressionPlugin, GzipCompressionPlugin, BundleAnalyzerPlugin],
  performance: {
    hints: 'warning',
    maxAssetSize: 500000, // 500kb
    maxEntrypointSize: 1000000, // 1MB
  }
}

//Get-ChildItem | Format-Table Name, @{Name="Size (KB)"; Expression={"{0:N2}" -f ($_.Length / 1KB)}} -AutoSize
