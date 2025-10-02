const { dts } = require("rollup-plugin-dts");
const { getTypesInputs } = require("./rollup-utils");

const input = getTypesInputs()

/** @type {import('rollup').RollupOptions[]} */
const rollupConfigTypes = [
  {
    input,
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  }
];

module.exports = rollupConfigTypes;
