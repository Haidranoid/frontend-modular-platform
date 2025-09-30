import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default new BundleAnalyzerPlugin({
  //analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
  analyzerMode: 'static',
  openAnalyzer: !!process.env.ANALYZE,
  reportFilename: 'report.html',
})
