// webpack.config.ts
import { merge } from 'webpack-merge'
import commonConfig from './src/webpack/webpack.common'
import devConfig from './src/webpack/webpack.dev'
import prodConfig from './src/webpack/webpack.prod'

interface EnvironmentVariables {
  mode: string
}

const webpackConfig = (env: EnvironmentVariables) => {
  switch (env.mode) {
    case 'cy-dev':
      return merge(commonConfig, devConfig)
    case 'development':
      return merge(commonConfig, devConfig)
    case 'production':
      return merge(commonConfig, prodConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}

export default webpackConfig
