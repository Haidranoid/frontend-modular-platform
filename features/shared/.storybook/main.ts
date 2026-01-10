import type { StorybookConfig } from '@storybook/react-webpack5'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import * as path from 'path'

//@ts-ignore
import webpack from 'webpack'

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
    config.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx']

    config.resolve.fallback = {
      ...(config.resolve?.fallback || {}),
      path: require.resolve('path-browserify'),
    }

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
    }

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('swc-loader'),
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
                refresh: false,
              },
            },
          },
        },
      },
    })

    config.plugins?.push(
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          NODE_ENV: 'development',
        }),
      }),
    )

    return config
  },
}

export default config
