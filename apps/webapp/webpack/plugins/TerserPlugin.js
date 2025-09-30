import TerserPlugin from 'terser-webpack-plugin'

export default new TerserPlugin({
  parallel: true,
  extractComments: false, // quita LICENSE.txt
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info', 'console.warn'],
    },
    format: {
      comments: false,
    },
  },
})