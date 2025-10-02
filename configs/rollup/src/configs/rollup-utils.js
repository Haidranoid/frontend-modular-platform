const fs = require("fs");
const path = require("path");
const glob = require("fast-glob");
const ts = require("typescript");

const pkg = JSON.parse(fs.readFileSync("package.json"), "utf-8");

function getTSConfigFile() {
  const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
  const configFile = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname("."),
  );

  return {...parsed.options, tsConfigPath }
}

function getExternalProjectsRegex() {
  const externalProjectsRegex = [
    ///^@webapp\/.*/i
  ];

  return externalProjectsRegex;
}

function getPathsAlias() {
  const { paths } = getTSConfigFile();

  return Object.entries(paths || {}).map(([find, target]) => ({
    find,
    replacement: path.resolve(target[0]),
  }));
}

function getExternalDependencies() {
  const baseExternalDependencies = [
    "@reduxjs/toolkit",
    "react",
    "react-dom",
    "react-redux",
    "react-router",
    "redux",
    "styled-components"
  ];

  const baseExternalDependenciesRegex = [
    /^storybook\/.*/i,
    /^@testing-library\/.*/i,
    /^@storybook\/.*/i,
    /^@testing-library.*/i,
    /^@babel\/.*/i,
  ]

  const externalDependencies = new Set([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]);

  return [...externalDependencies];
}

function getExternalTypesDependencies() {
  const externalDependencies = new Set([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]);

  return [...externalDependencies];
}

function getInputs() {
  const entryPoint = 'src/index.ts';
  const ignorePatterns = [
    "!src/**/*.test.*",
    "!src/**/*.ignore.*",
    "!src/**/*.stories.*",
    "!src/**/*.{css,scss,sass}",
    "!src/**/*.{mdx,avif,svg,png,jpg,jpeg,gif,webp}",
  ];

  return glob.sync([entryPoint, ...ignorePatterns])
}

function getTypesInputs() {
  const entryPoint = 'dist/types/index.d.ts';

  return glob.sync([entryPoint])
}

module.exports = {
  getInputs,
  getTypesInputs,
  getTSConfigFile,
  getPathsAlias,
  getExternalDependencies,
  getExternalTypesDependencies
};
