// 原生构造函数有自己的.prototype对象,如Array.prototype String.prototype等
// 这些对象包含其对应子类型所特有的行为特征

// 在字符串中找到指定子字符串的位置
String.prototype.indexOf()

// 获得字符串指定位置上的字符
// 获得字符春的指定部分
String.prototype.charAt()
String.prototype.substr()
String.prototype.substring()
String.prototype.slice()

// 将字符串转换为大写或小写
String.prototype.toUpperCase()
String.prototype.toLowerCase()

// 去掉字符串前后的空格,返回新的字符串
String.prototype.trim()

// 借助原型代理(prototype delegation)
const a = 'abc'
a.indexOf('c')
a.toUpperCase()
a.trim()

// 其他构造函数的原型包含他们各自类型所特有的行为特征,比如Number#tofixed(..)(将数字转换为指定长度的整数字符串)和Array.prototype.concat(..)合并数组.所有的函数都可以调用Function.prototype中的apply(..) call(..)和bind(..)
// 然而,有些原生原型(native prototype)并非普通对象那么简单

typeof Function.prototype
Function.prototype()
RegExp.prototype.toString() // 空正则表达式
// 'abc'.match(RegExp.prototype)

Array.isArray(Array.prototype)
Array.prototype.push(1, 2, 3)
Array.prototype
// 需要将Array.prototype设置为空,否则会导致问题!
Array.prototype.length = 0

// 将原型作为默认值
// Function.prototype是一个空函数,RegExp.prototype是一个"空"的正则表达式(无任何匹配),而Array.prototype是一个空数组.对未赋值的变量来说,他们是很好的默认值
function isThisCool (vals, fn, rx) {
  vals = vals || Array.prototype
  fn = fn || Function.prototype
  rx = rx || RegExp.prototype
  return rx.test(vals.map(fn).join(''))
}
isThisCool()

isThisCool(
  ['a', 'b', 'c'],
  function (v) {
    return v.toUpperCase()
  },
  /D/
)
