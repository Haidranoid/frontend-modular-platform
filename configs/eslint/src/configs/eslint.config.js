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
      tslint: tslint.plugin,
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      jest: eslintPluginJest,
      cypress: eslintPluginCypress,
      'testing-library': eslintPluginTestingLibrary,
      'jest-dom': eslintPluginJestDom,
      'jsx-a11y': eslintPluginJsxA11y,
      'unused-imports': eslintPluginUnusedImports,
      import: eslintPluginImport,
    },
    rules: {
      // Reglas generales
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-a11y/no-autofocus': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': 'off',
      'tslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
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
      //'prettier/prettier': ['error', prettierConfig],
      'react/react-in-jsx-scope': 'off',
      'tslint/no-var-requires': 'off',
    },
  },

  // 3️ Test files
  // Infra de tests (Jest + jest-dom + testing-library base)
  {
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}'],
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
      ...eslintPluginJestDom.configs.recommended.rules,
      ...eslintPluginTestingLibrary.configs.react.rules,
      'jest/no-disabled-tests': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  // RTL estrictos SOLO para TS/TSX
  {
    files: ['**/*.test.{ts,tsx}'],
    rules: {
      // RTL best practices
      'testing-library/no-node-access': 'error',
      'testing-library/no-container': 'error',
      'testing-library/prefer-find-by': 'error',
      'testing-library/prefer-screen-queries': 'error',

      // Jest discipline
      'jest/valid-title': [
        'error',
        {
          mustMatch:
            '^(when|with|and|runs|should|checks|verifies|shows|renders|transitions|preloaded|does not)|^[A-Z][a-zA-Z]+$',
          disallowedWords: ['test', 'works', 'correctly'],
        },
      ],

      'jest/no-conditional-expect': 'error',
      'jest/no-standalone-expect': 'error',
    },
  },
  {
    files: ['jest.config.{js,ts}', 'eslint.config.{js,ts}'],
    rules: {
      quotes: ['error', 'single'],
      //'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 4️ Cypress
  {
    files: [
      'cypress/**/*.cy.{ts,js}',
      'cypress/support/**/*.{ts,js}',
      'cypress.config.ts',
    ],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './tsconfig.cypress.json',
        //tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'jest/expect-expect': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'error',
      'import/no-extraneous-dependencies': 'off',
      //'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 5️ Storybook
  {
    files: ['.storybook/**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './.storybook/tsconfig.json',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      storybook: eslintPluginStorybook,
    },
    rules: {
      ...eslintPluginStorybook.configs.recommended.rules,
      //'prettier/prettier': ['error', prettierConfig],
    },
  },

  // 6️ Ignore build artifacts, coverage, node_modules, mocks
  {
    ignores: [
      'node_modules',
      'dist',
      'lib',
      'build',
      'server',
      'coverage',
      'public',
      'temp',
      'src/experimental',
      'src/legacy',
      'src/assets',
      'cypress/examples',
      'cypress/stubs',
      '.idea',
      '.rush',
      'rush-logs',
      'tsconfig.json',
    ],
  },
]

module.exports = eslintConfig
