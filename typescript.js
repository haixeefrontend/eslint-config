'use strict'

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['@hamster-bot/eslint-config/typescript'],
  plugins: ['import'],
  settings: {
    // eslint-disable-next-line n/global-require
    ...require('./typescript').settings,
    'import/extensions': ['.cjs', '.js', '.mjs', '.jsx', 'cts', '.ts', '.mts', '.tsx'],
    'import/parser': {
      '@typescript-eslint/parser': ['.cts', '.ts', '.mts', '.tsx'],
    },
    'import/ignore': ['node_modules'],
  },
  rules: {
    'import/no-unresolved': ['error'],
  },
}
