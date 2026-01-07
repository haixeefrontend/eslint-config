import { defineConfig } from 'eslint/config'

import vue from './vue.js'


const config = defineConfig(
  ...vue,
  {
    languageOptions: {
      globals: {
        uni: 'readonly', // uni-app global variable
        plus: 'readonly', // h5 plus
        UniApp: 'readonly',
        UniNamespace: 'readonly',
        // Mini Program globals
        my: 'readonly', // Alipay
        wx: 'readonly', // WeChat
        ww: 'readonly', // WeWork
        qq: 'readonly', // QQ
        dd: 'readonly', // DingTalk
        tt: 'readonly', // Bytedance / Toutiao / Lark / TikTok
        swan: 'readonly', // Baidu
        jd: 'readonly', // JD
        xhs: 'readonly', // Xiaohongshu
        // Vue globals
        getCurrentPages: 'readonly',
      },
    },
    ignores: ['**/node_modules/**/*', '/dist/**/*', '**/unpackage/**/*'],

    rules: {
      'multiline-comment-style': 'off', // uni-app's conditional compilation comments conflict with this rule
    },
  },
)

export default config
