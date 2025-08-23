const webpack = require('webpack')

const bufferPlugin = new webpack.ProvidePlugin({
  Buffer: ['buffer', 'Buffer'],
})

module.exports = bufferPlugin
