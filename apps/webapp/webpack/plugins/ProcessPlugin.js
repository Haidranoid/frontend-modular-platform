const webpack = require('webpack')

const processPlugin = new webpack.ProvidePlugin({
  process: 'process/browser.js',
})

module.exports = processPlugin
