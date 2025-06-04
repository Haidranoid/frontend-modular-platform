// webpack.dev.ts
import type { WebpackConfiguration } from 'webpack-cli'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const devConfig: WebpackConfiguration & DevServerConfiguration = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: false,
    liveReload: true,
    open: false,
    allowedHosts: 'all',
    historyApiFallback: true,
  },
  plugins: [],
}

export default devConfig
