import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'

export default new NodePolyfillPlugin({
    additionalAliases: ['buffer', 'Buffer']
})
