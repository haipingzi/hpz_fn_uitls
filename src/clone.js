import type from './type';
// clone 函数 注释
export default function clone(source) {
  const t = type(source);
  if (!['array', 'object'].includes(t)) return source;
  if (t === 'array') {
    return source.map((el) => {
      return clone(el);
    });
  } else {
    const obj = {};
    for (const key in source) {
      if (Object.hasOwnProperty.call(source, key)) {
        const element = source[key];
        obj[key] = element;
      }
    }
    return obj;
  }
}
