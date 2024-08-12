import eslinttsParser from '@typescript-eslint/parser'
import unocss from '@unocss/eslint-config/flat'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

import ts from './typescript.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...ts,
  ...pluginVue.configs['flat/strongly-recommended'],
  unocss,
  {
    settings: {
      'import-x/extensions': ['.cjs', '.js', '.mjs', '.jsx', 'cts', '.ts', '.mts', '.tsx', '.vue'],
      'import-x/parser': {
        '@typescript-eslint/parser': ['.cts', '.ts', '.mts', '.tsx'],
        'vue-eslint-parser': ['.vue'],
      },
      'import-x/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json|vue)$'],
    },
    rules: {
      'import-x/no-unresolved': ['error', { ignore: ['\\.(coffee|scss|css|less|hbs|svg|json)$'] }],
    },
  },
  {
    files: ['**/*.vue', '*.vue'],
    languageOptions: {
      parser: vueParser,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        parser: eslinttsParser,
        sourceType: 'module',
        projectService: false,
        extraFileExtensions: ['.vue'],
      },
    },
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
]

export default config
