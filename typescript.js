'use strict'

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@hamster-bot/eslint-config/typescript'],
  plugins: ['import'],
  settings: {
    'import/extensions': ['.cjs', '.js', '.mjs', '.jsx', 'cts', '.ts', '.mts', '.tsx'],
    'import/parser': {
      '@typescript-eslint/parser': ['.cts', '.ts', '.mts', '.tsx'],
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/no-unresolved': ['error'],
  },
}
