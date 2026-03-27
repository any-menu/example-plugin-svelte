# AnyMenu Plugin Svelte

> 这是 [AnyMenu](https://github.com/any-menu/any-menu) 的插件开发模板

## 编译

```bash
$ npm install
$ npm run build
# 然后会将编译结果生成到 dist 目录下
```

## 使用

同普通的 AnyMenu 插件

将编译好的结果放置于 AnyMenu 的插件目录下，然后 AnyMenu 中刷新本地插件列表即可看到刚刚添加的新插件

将新插件开启后即可 (当前版本可能需要重启下插件/软件才可)

## 从零生成此项目 (可选)

(1) 基于 plugin-simple

先基于 [any-menu/example-plugin-simple](https://github.com/any-menu/example-plugin-simple) 的从零生成说明

然后使用 svelte:

(2) 添加 svelte 依赖

```bash
npm install svelte
npm install -D svelte-loader
```

(3) 配置构建工具以支持 Svelte

- 如果之前的项目基于 webpack：

    ```bash
    npm install -D webpack svelte-loader style-loader css-loader
    ```

    webpack.config.js 配置示例：

    ```js
    // webpack.config.js
    const path = require('path');
    module.exports = {
      resolve: {
        alias: {
          svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
      },
      module: {
        rules: [
          {
            test: /\.svelte$/,
            use: 'svelte-loader'
          },
          // 其他规则...
        ]
      },
      // 其他配置...
    }
    ```

- 如果之前的项目基于 vite：

    ```bash
    npm install -D vite @sveltejs/vite-plugin-svelte
    ```

    vite.config.js 配置示例：

    ```js
    // vite.config.js
    import { defineConfig } from 'vite';
    import { svelte } from '@sveltejs/vite-plugin-svelte';

    export default defineConfig({
      plugins: [svelte()]
    });
    ```

(4) 使用 Svelte 挂载到面板元素

假设面板入口文件为 index.ts：

```ts
import SubPanel from './SubPanel.svelte';

const newPanel = document.createElement('div');
ctx.api.registerSubPanel({
  id: 'example-plugin-svelte-panel',
  el: newPanel
});

// 使用 Svelte 渲染
const app = new App({
  target: newPanel,
  props: {} // 你的 props
});
```
