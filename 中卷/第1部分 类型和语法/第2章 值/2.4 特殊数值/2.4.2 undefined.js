/* // 在非严格模式下,我们可以为全局标识符undefined赋值
undefined = 1
function f () {
  undefined = 2
}
// 在严格模式和非严格模式下, 我们可以声明一个名为undefined的局部变量.再次强调最好不要这样做!
function foo () {
  'use strict'
  const undefined = 3
  console.log(undefined)
}

foo() */

// void运算符 undefined是一个内置标识符(除非被重新定义),它的值是undefined,通过void运算符即可得到该值
const a = 24
console.log(void a, a)
