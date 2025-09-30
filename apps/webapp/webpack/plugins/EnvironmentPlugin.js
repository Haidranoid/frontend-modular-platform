import webpack from "webpack"

// en plugins de prod
export default new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify("production"),
})