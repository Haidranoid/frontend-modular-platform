import { DotEnvPlugin, HtmlWebpackPlugin, MiniCssExtractPlugin } from './plugins/index.js'
//import nodePolyfillPlugin from './plugins/NodePolyfillPlugin.js'
//import bufferPlugin from './plugins/BufferPlugin.js'

export const commonConfig = {
  target: 'web',
  entry: [
    process.cwd() + '/src/main/index.tsx'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: {
      buffer: false,
      process: false,
    },
    fullySpecified: false,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
            cacheCompression: false,
            compact: true,
          },
        },
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          //'postcss-loader', // si tienes postcss.config.js
          //'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    DotEnvPlugin,
    HtmlWebpackPlugin,
  ],
}