TypeScript React Formik onChange Demo
=================================

Formik没有提供根级别的onChange，所以我们需要利用一些方式来模拟。

需要注意的是，当我们改变formik的值时，必须只在发生改变时setFieldValue，否则会引发无限循环

```
npm install
npm run demo
```

It will open page on browser automatically.
