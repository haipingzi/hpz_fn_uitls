# 文档

这是 javascript 常用工具库

## clone

实现数据的深拷贝

- param {any} data 待拷贝的数据
- return {any} 拷贝成功的数据

### 例子

```js
const data = { a: { b: 123 }, c: 5656 };
const cloneData = clone(data);
```

## type

获取数据类型

- param {any} data 需要获取类型的数据
- return {any} 数据的类型（小写）

### 例子

```js
const obj = { a: { b: 123 }, c: 5656 };
const objType = type(data); // object;
```
