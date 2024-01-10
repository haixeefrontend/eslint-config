# @haixee/eslint-config

ESLint 通用配置，适用于 Vue 项目。

## 安装

```bash
yarn add -D @haixee/eslint-config
```

如果还没有安装 `eslint` 及相关插件，请先安装：

```bash
yarn add -D eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue
```

如果使用了 `typescript`，请安装 `@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin` 和 `eslint-import-resolver-typescript`：

```bash
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

然后在项目的 `package.json` 中添加以下配置：

```jsonc
{
  "eslintConfig": {
    "extends": "@haixee/eslint-config"
  }
}
```

> [!NOTE]
> 默认配置包含了 TypeScript + Vue 的配置，如果仅有 JavaScript + Vue，可以将上述值改为 "@haixee/eslint-config/javascript"

## 使用

如果你使用的是 VSCode，需要安装 [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，其他 IDE 也有相应插件。

## 编译与发布

本仓库启用了 GitHub Actions 自动编译，只需将代码推送到 `master` 分支即可。

发布新版本时，需要修改 `package.json` 中的 `version` 字段，然后将修改后的代码推送到 `master` 分支。

## License

This config is licensed under the [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) license.
