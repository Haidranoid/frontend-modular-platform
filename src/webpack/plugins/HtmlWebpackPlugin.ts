import HtmlWebpackPlugin from 'html-webpack-plugin'

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  chunks: ['main'],
  inject: 'body',
  template: './public/index.html',
  favicon: './public/favicon.ico',
  filename: 'index.html',
  minify: {
    collapseWhitespace: true,
    removeComments: true,
  },
})

export default htmlWebpackPlugin
