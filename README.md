### hpz_fn_uitls

实现 JavaScript 常用的工具函数

### 使用者指南

通过 npm 下载安装代码

```bash
$ npm install --save hpz_fn_uitls
```

如果你是 node 环境

```js
var { clone } = require('hpz_fn_uitls');

clone({ a: 1 });
```

如果你是 webpack 等环境

```js
import { clone } from 'hpz_fn_uitls';

clone({ a: 1 });
```

如果你是浏览器环境

```html
<script src="node_modules/hpz_fn_uitls/dist/index.aio.js"></script>
<script>
  clone({ a: 1 });
</script>
```

### 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```
