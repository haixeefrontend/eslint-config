'use strict'

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./index.js', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false,
    },
  },
  globals: {
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineProps: 'readonly',
    defineOptions: 'readonly',
    JSX: 'readonly',
  },
  plugins: ['@typescript-eslint', 'vue'],
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
