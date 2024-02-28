'use strict'

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es2023: true,
  },
  extends: ['./vue.js'],
  globals: {
    uni: 'readonly',
  },
  ignorePatterns: ['**/node_modules/**/*', '/dist/**/*', '**/unpackage/**/*'],
}
