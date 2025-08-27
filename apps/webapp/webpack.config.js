// webpack.config.ts
const { merge } = require( 'webpack-merge')
const { commonConfig } = require( './webpack/webpack.common')
const { devConfig } = require( './webpack/webpack.dev')
const { prodConfig } = require( './webpack/webpack.prod')

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

module.exports = webpackConfig
