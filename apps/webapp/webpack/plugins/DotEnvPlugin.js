/*
  DotEnv plugin allows you to access to process.env.[properties]
  these properties can be declared in .env file or assigned in
  webpack.env.ts
 */
const DotenvPlugin = require('dotenv-webpack')

const dotEnvPlugin = new DotenvPlugin({
  systemvars: true,
})

module.exports = dotEnvPlugin
