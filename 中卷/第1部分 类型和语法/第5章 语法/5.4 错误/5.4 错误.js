// JavaScript不仅有各种类型的运行时错误(TypeError,ReferenceError,SyntaxError等),它的语法中也定义了一些编译时错误
// 早期错误 在编译阶段发现的代码错误叫做"早期错误"(early error).语法错误是早期错误的一种(如a = ,).另外,语法正确但不符合语法规则的情况也存在
// 这些错误子代码执行之前是无法哟个try..catch捕获的,相反,他们还会导致解析/编译失败
// 规范没有明确规定浏览器(和开发工具)应该如何处理报错,因此下面的错误处理(保活错误类型和错误信息)在不同的浏览器中可能会有所不同

// 非法的正则表达式,会产生早期错误
// SyntaxError: Invalid regular expression: /+foo/: Nothing to repeat
//     at Object.compileFunction (node:vm:352:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1026:15)
//     at Module._compile (node:internal/modules/cjs/loader:1061:27)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1149:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47
// var regExp1 = /+foo/

// ES5规范中的严格模式定义了很多早期错误.比如在严格模式中,函数的参数不能重名
function foo1 (a, b, a) {

}

// SyntaxError: Duplicate parameter name not allowed in this context
// function foo2 (a, b, a) {
//   'use strict'
// }

/**
 * <b>提前使用变量</b>
 * ES6规定定义了一个新概念,叫做TDZ(Temporal Dead Zone,暂时性死区)
 * TDZ指的是由于代码中的变量还么有初始化而不能被引用的情况
 */

// ES6规范中的let块作用域
{
  a = 2
  let a
}

/**
 * 有意思的是,对未声明变量使用typeof不会产生错误,但在TDZ中却会报错
 */
{
  typeof a
  typeof b
  let b
}
