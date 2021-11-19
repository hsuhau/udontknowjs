// 该安全防御机制对在浏览器中运行的JavaScript代码来说还是很有帮助的,因为多个脚本文件会在共享的全局命名空间中加载变量

/**
 * polyfill 衬垫代码 补充代码
 */

(function () {
  FunctionUnDeclared()
  {
  }

  function doSomethingCool () {
    const helper = typeof FunctionUnDeclared !== 'undefined'
      ? FunctionUnDeclared
      : function () {
        // default feature
      }
  }

  doSomethingCool()
})()
