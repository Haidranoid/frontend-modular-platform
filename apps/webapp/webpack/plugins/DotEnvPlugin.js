/*
  DotEnv plugin allows you to access to process.env.[properties]
  these properties can be declared in .env file or assigned in
  webpack.env.ts
 */
import DotenvPlugin from 'dotenv-webpack'

export default new DotenvPlugin({
  systemvars: true,
})