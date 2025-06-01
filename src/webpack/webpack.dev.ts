// webpack.dev.ts
import type { WebpackConfiguration } from 'webpack-cli'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { reactRefreshWebpackPlugin } from './plugins/ReactRefreshWebpackPlugin'
import { IS_DEV, NODE_ENV } from './constants'

console.log({ NODE_ENV })
console.log({ IS_DEV })
const devPlugins = IS_DEV ? [reactRefreshWebpackPlugin] : []
const devConfig: WebpackConfiguration & DevServerConfiguration = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    liveReload: false,
    open: false,
    allowedHosts: 'all',
    historyApiFallback: true,
  },
  plugins: devPlugins,
}

export default devConfig
