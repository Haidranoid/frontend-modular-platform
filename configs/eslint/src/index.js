const path = require('path');
const eslintBinPath = require("./eslint-bin.js");

const eslintConfigPath = path.join(__dirname, './eslint.config.cjs');

module.exports = {
    eslintConfigPath,
    eslintBinPath
}