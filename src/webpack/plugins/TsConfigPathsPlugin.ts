import path from 'path'
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
import { ROOT_DIR } from '../constants'

const tsconfigPathsPlugin = new TsConfigPathsPlugin({
  configFile: path.resolve(ROOT_DIR, 'tsconfig.cypress.json'),
})

export default tsconfigPathsPlugin
