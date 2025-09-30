import webpack from 'webpack'

export default new webpack.ProvidePlugin({
  process: 'process/browser.js',
})