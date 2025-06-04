import * as path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { ROOT_DIR } from '../constants'

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(ROOT_DIR, 'public/coverage-report'),
      to: path.resolve(ROOT_DIR, 'dist/coverage-report'),
    },
  ],
})

export default copyWebpackPlugin
