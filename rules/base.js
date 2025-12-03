import js from '@eslint/js'
import { flatConfigs as importx } from 'eslint-plugin-import-x'

import stylistic from './stylistic.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  js.configs.recommended,
  importx.recommended,
  {
    ignores: [
      '**/.git/**',
      '**/.yarn/**',
      '**/node_modules/**',
      '**/.pnp.*',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2024,
    },
    settings: {
      'import-x/resolver': {
        node: true,
      },
    },
    rules: {
      'dot-notation': 'off',
      'generator-star-spacing': ['error', 'after'],
      'max-len': 'off',
      'multiline-ternary': 'off',
      'no-callback-literal': 'off',
      'no-mixed-operators': 'off',
      'no-use-before-define': 'off',
      'no-return-assign': 'off',
      'no-sequences': 'off',
      'no-useless-escape': 'off',
      'one-var': 'off',
      'operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      'valid-typeof': 'off',
      'yield-star-spacing': ['error', 'after'],
      'space-before-function-paren': 'off',
      // Import plugin
      'import-x/export': 'off',
      'import-x/no-unresolved': 'error',
      'import-x/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
    },
  },
  ...stylistic,
]

export default config
