import { Linter } from 'eslint'

declare const res: {
    configs: {
        base: Linter.Config,
        node: Linter.Config,
        typescript: Linter.Config,
        uniapp: Linter.Config,
        vue: Linter.Config,
    }
}

export default res
