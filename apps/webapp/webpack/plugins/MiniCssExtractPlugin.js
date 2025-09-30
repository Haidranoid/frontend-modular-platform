import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default new MiniCssExtractPlugin({
  filename: "css/[name].[contenthash].css",
  chunkFilename: "css/[id].[contenthash].css",
})