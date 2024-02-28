# @haixee/eslint-config

ESLint 通用配置，适用于 Vue 项目。

## 安装

```bash
yarn add -D @haixee/eslint-config
```

如果还没有安装 `eslint` 及相关插件，请先安装：

```bash
yarn add -D eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-promise
```

## 使用

在项目的 `package.json` 中添加以下配置：

```jsonc
{
  "eslintConfig": {
    "extends": "@haixee/eslint-config"
  }
}
```

> [!NOTE]
> 默认配置仅包含了 JavaScript 的配置，如果想要其他配置，请参考下方的配置说明。

### `@haixee/node`

此配置适用于 Node.js 项目，如 `vite.config.ts` 等文件的配置。

### `@haixee/typescript`

此配置适用于 TypeScript 项目，请安装 `@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin` 和 `eslint-import-resolver-typescript`：

```bash
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

### `@haixee/vue`

此配置适用于 Vue3 项目，如 `*.vue` 文件的配置。

使用时，需要先安装 `eslint-plugin-vue` 和下方的 TypeScript 所需求的依赖。

```bash
yarn add -D eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

### `@haixee/uniapp`

此配置适用于 UniApp + Vue3 项目，需安装上述 Vue 和 TypeScript 所需求的依赖。

```bash
yarn add -D eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

如果你使用的是 VSCode，需要安装 [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，其他 IDE 也有相应插件。

## 编译与发布

本仓库启用了 GitHub Actions 自动编译，只需将代码推送到 `master` 分支即可。

发布新版本时，需要修改 `package.json` 中的 `version` 字段，然后将修改后的代码推送到 `master` 分支。

## License

This config is licensed under the [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) license.
