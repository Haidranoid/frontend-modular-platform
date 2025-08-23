const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const nodePolyfillPlugin = new NodePolyfillPlugin({
    additionalAliases: ['buffer', 'Buffer']
})

module.exports = nodePolyfillPlugin
