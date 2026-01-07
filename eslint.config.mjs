import { defineConfig } from 'eslint/config'

import haixee from './dist/index.js'

export default defineConfig(
  haixee.configs.node,
  haixee.configs.typescript,
)
