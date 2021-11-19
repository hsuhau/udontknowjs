// 同样,除非万不得已,否则尽量不要使用Object(..)/Function(..)/EegExp(..)
const o1 = new Object()
o1.foo = 'bar'
o1

const o2 = { foo: 'bar' }
o2

const f1 = new Function('a', 'return a *a')
const f2 = function (a) {
  return a * 2
}

function f3 (a) {
  return a * 2
}

const regExp1 = new RegExp('^a*b+', 'g')
const regExp2 = /^a*b+/g

// 实际情况中没有必要使用new Object()来创建对象,因为这样就无法像常量形式那样一次设定多个属性,而必须逐一设定
// 构造函数Function只有极少情况下很有用,比如动态定义函数参数和函数体的时候,不要把Function(..) 当作eval(..)的替代品,你基本上不会通过这种方式来定义函数

// 强烈建议使用常量形式来定义正则表达式,这样不仅语法金丹,执行效率也更高,因为JavaScript引擎在代码执行前会对他们进行预编译和缓存.与前面的构造函数不同,RegExp(..)有时还是很有用的我,比如动态定义正则表达式时
const name = 'Kyle'
const namePattern = new RegExp('\\b(? :)' + name + ')+\\b', 'ig')
const matches = name.match(namePattern)
