import * as webpack from 'webpack'

const bufferPlugin = new webpack.ProvidePlugin({
  Buffer: ['buffer', 'Buffer'],
})

export default bufferPlugin
