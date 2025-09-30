//import bundleAnalyzerPlugin from './plugins/BundleAnalyzerPlugin.js'

export const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  stats: {
    errorDetails: true
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: false,
    liveReload: true,
    open: false,
    allowedHosts: 'all',
    historyApiFallback: true,
  },
  plugins: [],
}