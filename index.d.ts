import { Linter } from 'eslint'

export default {
    configs: {
        base: Linter.Config,
        node: Linter.Config,
        typescript: Linter.Config,
        uniapp: Linter.Config,
        vue: Linter.Config,
    }
}
