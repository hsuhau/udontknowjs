// JavaScript有七种内置类型
// 空值 null
// 未定义 undefined
// 布尔值 boolean
// 数字 number
// 字符串 string
// 对象 object
// 符号 symbol, ES6新增
// 除了对象,其他类型统称"基本类型"

console.log(typeof undefined === 'undefined')
console.log(typeof true === 'boolean')
console.log(typeof 24 === 'number')
console.log(typeof '24' === 'string')
console.log(typeof { life: 'forever' } === 'object')
console.log(typeof Symbol() === 'symbol')
console.log(typeof null === 'object')

// 复合条件 检测null值的类型
// null值是假值,也是唯一一个用typeof检测会返回'object'的基本类型值
const a = null
console.log(!a && typeof a === 'object')

// function是object的子类型
// 函数是"可调用对象",它有一个内部属性[[Call]],该属性使其可以被调用
console.log(
  typeof function foo () {
  } === 'function'
)

// 函数不仅是对象,还可以拥有属性
function f (var1, var2) {
}
// 函数对象的length属性是其声明的参数的个数
console.log(f.length)

// 数组是object的一个"子类型",数组的元素按数字顺序来进行索引(而非像普通对象那样通过字符串赋值),其length属性是元素的个数
console.log(typeof [1, 2, 3])
