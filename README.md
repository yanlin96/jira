# Notes

/public 目录下，manifest.json 用来控制 pwa
robot，是搜索引擎的控制

yarn.lock 锁定版本号 那个符号 ^ 不能全部锁定

encodeUI 转义整个 url
encodeUIComponent 转义部分

- react 中为什么要是用 key
  https://www.51cto.com/article/712896.html

- ONLY useEffect hooks 的执行顺序
  React 18 会 run useEffect 两次， strictMode 下

1. 先执行“render”，
2. 然后是 useEffect，custom hook 里的 useEffect 也是这个时候执行
3. 执行完后，如果有 state 的改变，直接重新 run 组件 （不会执行 render）
4. 组件内部的都会重新 run，不会再次 run useEffect，因为 dependency 没改动
5. run render

- 特殊的 boolean，使用 typescript 的时候也要注意
  https://wangdoc.com/javascript/stdlib/boolean

？问题，什么时候使用 hook，什么时候使用含数据
当需要设计到当前组件的 state 的时候，我们应该去考虑下 custom hook

- 深拷贝和浅拷贝

  - 共性是都不会 和原数据指向同一个对象。但是对于内部 nest 的数据，浅拷贝还是指向了同一个

- ts 中的默认类型和泛型的结合

```ts
interface FormEvent<T = Element> extends SyntheticEvent<T> {}
```
