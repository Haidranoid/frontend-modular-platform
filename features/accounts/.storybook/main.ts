import type { StorybookConfig } from '@storybook/react-webpack5'
import { WebpackDefinePlugin } from '@storybook/builder-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { fileURLToPath } from 'url'
import * as path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false,
      },
    },
    '@storybook/addon-jest',
    '@storybook/addon-themes',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
    },
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve ??= {}

    config.resolve.alias ??= {}
    /*
    config.resolve.alias["@webapp/shared"] = path.resolve(
      __dirname,
      "../../shared/src",
    );
    */

    config.resolve.extensions ??= []
    config.resolve.extensions.push('.ts', '.tsx')

    config.resolve.plugins ??= []
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    )

    config.plugins ??= []
    config.plugins.push(
      new WebpackDefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    )

    return config
  },
}

export default config
