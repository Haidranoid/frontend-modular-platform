const path = require('path')

const rollupConfigPath = path.join(__dirname, '../configs/rollup.config.js')
const rollupConfigTypesPath = path.join(__dirname, '../configs/rollup.config.types.js')

module.exports = {
  rollupConfigPath,
  rollupConfigTypesPath,
}
