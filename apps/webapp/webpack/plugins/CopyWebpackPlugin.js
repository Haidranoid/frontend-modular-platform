import CopyWebpackPlugin from 'copy-webpack-plugin'

export default new CopyWebpackPlugin({
  patterns: [
    {
      from: process.cwd() + 'public/coverage-report',
      to: process.cwd() + 'dist/coverage-report',
    },
  ],
})