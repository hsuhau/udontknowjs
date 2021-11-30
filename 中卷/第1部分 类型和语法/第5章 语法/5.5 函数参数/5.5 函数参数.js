// ES6 参数默认值
/**
 * 对ES6中的参数默认值而言,参数被省略或被赋值为undefined效果都一样,都是取该参数的默认值.然而某些情况下,他们之间还是有区别的
 * 虽然参数a和b都有默认值,但是函数不带参数时,arguments数组为空
 * @param a
 * @param b
 */
function foo (a = 24, b = a + 1) {
  console.log(
    arguments.length, a, b,
    arguments[0], arguments[1]
  )
}

foo()
foo(10)
foo(10, undefined)
foo(10, null)

/**
 * 向函数传递参数时,arguments数组中的对应单元会和命名参数建立关联(linkage)以得到相同的值.相反,不传递参数就不会建立关联
 * 但是,在严格模式中并没有建立关联这一说
 * 因此,在开发总部要依赖这种实现机制.
 * 实际上,它是JavaScript语言引擎底层实现的一个抽象泄露(leaky abstraction),并不是语言本身的特性
 * <del>arguments数组已经被废止(特别是在ES6引入剩余参数)</del>
 * 在ES6之前,获取函数所有参数的唯一途径就是arguments数组.此外,即使将命名参数和arguments数组混用也不会出错,只需遵守一个原则,既不要同时访问命名参数和其对应的arguments数组单元
 * @param a
 */
function foo1 (a) {
  'use strict'
  a = 24
  console.log(arguments[0])
}

foo1(2)
foo1()
