const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const { ROOT_DIR } = require('../constants')

const tsconfigPathsPlugin = new TsConfigPathsPlugin({
  configFile: path.resolve(ROOT_DIR, 'tsconfig.cypress.json'),
})

module.exports = tsconfigPathsPlugin
