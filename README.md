# @haixeefrontend/eslint-config

ESLint 通用配置

## 安装

```bash
yarn add --dev @haixeefrontend/eslint-config@git+ssh://git@e.coding.net:haixeefrontend/utils/eslint-config.git#dist
# 或者使用 HTTPS
yarn add --dev @haixeefrontend/eslint-config@git+https://e.coding.net/haixeefrontend/utils/eslint-config.git#dist
```

如果还没有安装 `eslint` 及相关插件，请先安装：

```bash
yarn add --dev eslint eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue
```

如果使用了 `typescript`，请安装 `@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin` 和 `eslint-import-resolver-typescript`：

```bash
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

然后在项目的 `package.json` 中添加以下配置：

```json
{
  "eslintConfig": {
    "extends": "@haixeefrontend/eslint-config"
  }
}
```

## 使用

如果你使用的是 VSCode，可以安装 [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)。

## 编译及发布

确保本地已经配置好 `git` 后，使用 `bash` 兼容的 `shell`，执行 `./publish.sh` 即可。

## License

This config is licensed under the [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) license.
