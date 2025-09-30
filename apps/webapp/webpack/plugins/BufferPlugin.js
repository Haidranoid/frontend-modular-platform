import webpack from 'webpack'

export default new webpack.ProvidePlugin({
  Buffer: ['buffer', 'Buffer'],
})