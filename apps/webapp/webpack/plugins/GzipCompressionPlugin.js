import CompressionPlugin from 'compression-webpack-plugin'

export default new CompressionPlugin({
  algorithm: 'gzip',
  filename: '[path][base].gz',
  test: /\.(js|css|html|svg)$/,
  compressionOptions: { level: 9 },
  threshold: 10240,
  minRatio: 0.8,
})

