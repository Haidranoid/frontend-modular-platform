const tslint = require('typescript-eslint')
const eslintPluginReact = require('eslint-plugin-react')
const eslintPluginTestingLibrary = require('eslint-plugin-testing-library')
const eslintPluginJest = require('eslint-plugin-jest')
const eslintPluginJestDom = require('eslint-plugin-jest-dom')
const eslintPluginCypress = require('eslint-plugin-cypress')
const eslintPluginPrettier = require('eslint-plugin-prettier')
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y')
const eslintPluginUnusedImports = require('eslint-plugin-unused-imports')
const eslintPluginImport = require('eslint-plugin-import')
const eslintPluginStorybook = require('eslint-plugin-storybook')
//import prettierConfig from './.prettierrc.json'
const prettierConfig = require('./prettierrc')

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  // 1️ Base config para JS/TS/React
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'tslint': tslint.plugin,
      'react': eslintPluginReact,
      'prettier': eslintPluginPrettier,
      'jest': eslintPluginJest,
      'cypress': eslintPluginCypress,
      'testing-library': eslintPluginTestingLibrary,
      'jest-dom': eslintPluginJestDom,
      'jsx-a11y': eslintPluginJsxA11y,
      'unused-imports': eslintPluginUnusedImports,
      'import': eslintPluginImport,
    },
    rules: {
      // Reglas generales
      'jsx-a11y/no-autofocus': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'tslint/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'unused-imports/no-unused-vars': 'off',

      // Prettier aplicado a todos los archivos base
      'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 2️ TypeScript específico
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      'react/react-in-jsx-scope': 'off',
      'tslint/no-var-requires': 'off',
    },
  },

  // 3️ Test files
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', 'jest.config.ts'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
      ...eslintPluginJestDom.configs.recommended.rules,
      ...eslintPluginTestingLibrary.configs.react.rules,
      'jest/no-disabled-tests': 'off',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 4️ Cypress
  {
    files: ['cypress/**/*.cy.{ts,js}', 'cypress.config.ts'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: { project: './tsconfig.cypress.json' },
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'jest/expect-expect': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'error',
      'import/no-extraneous-dependencies': 'off',
      'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 5️ Storybook
  {
    files: ['.storybook/**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './.storybook/tsconfig.storybook.json',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'storybook': eslintPluginStorybook,
    },
    rules: {
      ...eslintPluginStorybook.configs.recommended.rules,
      'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 6️ Ignore build artifacts, coverage, node_modules, mocks
  {
    ignores: ['node_modules', 'dist', 'build', 'server', 'coverage', 'public', '.idea'],
  },
]

module.exports = eslintConfig