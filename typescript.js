import ts from '@hamster-bot/eslint-config/typescript'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...ts,
  {
    settings: {
      'import-x/extensions': ['.cjs', '.js', '.mjs', '.jsx', 'cts', '.ts', '.mts', '.tsx'],
      'import-x/parser': {
        '@typescript-eslint/parser': ['.cts', '.ts', '.mts', '.tsx'],
      },
    },
    rules: {
      'import-x/no-unresolved': ['error'],
    },
  },
]

export default config

