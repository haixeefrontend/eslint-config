import { configs } from '@hamster-bot/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...configs.node,
]

export default config

