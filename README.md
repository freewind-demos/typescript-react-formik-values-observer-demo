TypeScript React Formik Values Observer Demo
=================================

Formik没有提供根级别的onChange，所以我们需要利用一些方式来模拟。

有一些需要注意的：

1. 只要调用了formik的`setValues`，哪怕`values`是同一个对象，也会触发新的render
2. 使用Component的方式（FormikObserver.tsx），可以利用react的hooks，可以有效监听field的变化，比较好处理（推荐）

```
npm install
npm run demo
```

It will open page on browser automatically.
