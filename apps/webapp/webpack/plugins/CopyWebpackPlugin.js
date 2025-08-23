const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const { ROOT_DIR } = require('../constants')

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(ROOT_DIR, 'public/coverage-report'),
      to: path.resolve(ROOT_DIR, 'dist/coverage-report'),
    },
  ],
})

module.exports = copyWebpackPlugin