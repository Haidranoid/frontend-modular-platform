// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'
import tslint from 'typescript-eslint'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintPluginJestDom from 'eslint-plugin-jest-dom'
import eslintPluginCypress from 'eslint-plugin-cypress'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import eslintPluginImport from 'eslint-plugin-import'
import prettierConfig from './.prettierrc.json' with { type: 'json' }
//import prettierConfig from "./.prettierrc" with { type: "json" };
//const prettierConfig = await import('./.prettierrc', {
//  with: { type: 'json' }
//});

export default [
  {
    // 1) Base config for JS/TS/React files (source code)
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
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
      // General React rules (can enable/disable)
      'prettier/prettier': ['error', prettierConfig], // Prettier formatting errors
      'jsx-a11y/no-autofocus': 'warn',
      // ... other general rules you want to enforce in all source files

      // 🔁 Removes unused import statements automatically on --fix.
      'unused-imports/no-unused-imports': 'warn',

      //🚨 Warns you about unused variables and arguments
      // while allowing _ignored patterns to be skipped intentionally.
      'tslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_', // allow keeping _unused for documentation/future
          args: 'after-used',
          argsIgnorePattern: '^_', // ignore intentionally unused params like _event
        },
      ],
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    // 2) TypeScript-specific rules (optional, if separate)

    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './tsconfig.json', // if you use type-aware linting
      },
    },
    rules: {
      // TypeScript-specific rules, e.g. from @typescript-eslint (if used)
      // e.g. '@typescript-eslint/no-unused-vars': ['warn'],
      'react/react-in-jsx-scope': 'off', // React 17+ no need to import React in scope
      'tslint/no-var-requires': 'off',
      //'tslint/no-unused-vars': 'off',
    },
  },
  {
    // 3) Test files (.test.ts, .test.tsx, jest.config.ts, etc)

    //plugins: {
    //    jest: eslintPluginJest,
    //    'testing-library': eslintPluginTestingLibrary,
    //},
    files: ['**/*.test.{ts,tsx,js,jsx}', '**/jest.config.ts'],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
      ...eslintPluginJestDom.configs.recommended.rules,
      ...eslintPluginTestingLibrary.configs.react.rules,
      'jest/no-disabled-tests': 'off',
      'react/react-in-jsx-scope': 'off',
      // add or override test-specific rules here
    },
  },
  {
    // 4) Cypress test files

    //plugins: {
    //    cypress: eslintPluginCypress,
    //},
    files: [
      'cypress/**/*.cy.{ts,js}',
      'cypress/**/*.ts',
      'cypress/**/*.js',
      'cypress.config.ts',
    ],
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        project: './tsconfig.cypress.ts',
      },
    },
    rules: {
      ...eslintPluginCypress.configs.recommended.rules,
      'jest/expect-expect': 'off',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/assertion-before-screenshot': 'error',
      // disable rules that conflict with Cypress patterns if needed
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    // 5) Ignore build artifacts, coverage, node_modules, mocks

    ignores: [
      'node_modules',
      'dist',
      'build',
      'server',
      'coverage',
      'public',
      '.idea',
      'src/main/experimental',
    ],
  },
  ...storybook.configs['flat/recommended'],
]
