import { merge } from'webpack-merge'
import { commonConfig } from'./webpack/webpack.common.js'
import { devConfig } from'./webpack/webpack.dev.js'
import { prodConfig } from'./webpack/webpack.prod.js'

const webpackConfig = (env) => {
  switch (env.mode) {
    case 'development':
      return merge(commonConfig, devConfig)
    case 'production':
      return merge(commonConfig, prodConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}

export default webpackConfig