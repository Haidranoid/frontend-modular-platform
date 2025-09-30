import HtmlWebpackPlugin from 'html-webpack-plugin'

export default new HtmlWebpackPlugin({
  template: process.cwd() + '/public/index.html',
  favicon: process.cwd() + '/public/favicon.ico',
  inject: 'body',
  filename: 'index.html',
  minify: 'auto',
  chunks: ['main'],
})