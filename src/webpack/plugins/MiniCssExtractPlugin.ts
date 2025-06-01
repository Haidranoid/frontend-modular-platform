const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
})

export { miniCssExtractPlugin }
export default MiniCssExtractPlugin
