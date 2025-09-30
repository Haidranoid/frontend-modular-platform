import CompressionPlugin from 'compression-webpack-plugin'

export default new CompressionPlugin({
  algorithm: 'brotliCompress',
  filename: '[path][base].br',
  test: /\.(js|css|html|svg)$/,
  compressionOptions: { level: 11 },
  threshold: 10240,
  minRatio: 0.8,
})