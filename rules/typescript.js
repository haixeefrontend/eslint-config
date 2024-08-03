import { configs } from '@hamster-bot/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...configs.typescript,
]

export default config

