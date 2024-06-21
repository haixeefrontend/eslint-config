'use strict'

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    // eslint-disable-next-line n/global-require
    ...require('./typescript').settings,
    'import/extensions': ['.cjs', '.js', '.mjs', '.jsx', 'cts', '.ts', '.mts', '.tsx', '.vue'],
    'import/parser': {
      '@typescript-eslint/parser': ['.cts', '.ts', '.mts', '.tsx'],
      'vue-eslint-parser': ['.vue'],
    },
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json|vue)$'],
  },
  rules: {
    // eslint-disable-next-line n/global-require
    ...require('./typescript').rules,
    'import/no-unresolved': ['error', { ignore: ['\\.(coffee|scss|css|less|hbs|svg|json)$'] }],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '(^_)|(^props$)',
          },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: 4,
            multiline: 1,
          },
        ],
        'vue/html-indent': ['error', 2],
        'vue/multi-word-component-names': 'warn',
        'vue/no-v-for-template-key': 'off',
        'vue/no-v-for-template-key-on-child': 'error',
        'vue/html-self-closing': [
          'warn',
          {
            html: {
              void: 'any',
            },
          },
        ],
        'vue/component-name-in-template-casing': [
          'error',
          'kebab-case',
          {
            registeredComponentsOnly: false,
          },
        ],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
      },
    },
  ],
}
