import vue from './vue.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...vue,
  {
    languageOptions: {
      globals: {
        uni: 'readonly',
      },
    },
    ignores: ['**/node_modules/**/*', '/dist/**/*', '**/unpackage/**/*'],
  },
]

export default config
